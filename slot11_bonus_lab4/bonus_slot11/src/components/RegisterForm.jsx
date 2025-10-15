import React, { useState, useEffect } from 'react';
import { UserPlus, Mail, Lock, CheckCircle, XCircle } from 'lucide-react';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Validation functions
  const validateUsername = (username) => {
    const trimmed = username.trim();
    if (username !== trimmed) {
      return 'Username không được có khoảng trắng đầu/cuối';
    }
    if (trimmed.length < 3) {
      return 'Username phải có ít nhất 3 ký tự';
    }
    if (!/^[a-zA-Z0-9_.]+$/.test(trimmed)) {
      return 'Username chỉ được chứa chữ, số, dấu gạch dưới (_) hoặc dấu chấm (.)';
    }
    return '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Email không đúng định dạng';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Password phải có ít nhất 8 ký tự';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password phải có ít nhất 1 chữ hoa';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password phải có ít nhất 1 chữ thường';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password phải có ít nhất 1 chữ số';
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      return 'Password phải có ít nhất 1 ký tự đặc biệt';
    }
    return '';
  };

  const validateConfirmPassword = (confirmPassword, password) => {
    if (confirmPassword !== password) {
      return 'Confirm password không khớp với password';
    }
    return '';
  };

  // Validate all fields
  const validateForm = (data) => {
    const newErrors = {
      username: validateUsername(data.username),
      email: validateEmail(data.email),
      password: validatePassword(data.password),
      confirmPassword: validateConfirmPassword(data.confirmPassword, data.password)
    };
    return newErrors;
  };

  // Check if form is valid
  useEffect(() => {
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    
    const valid = Object.values(newErrors).every(error => error === '') &&
                  Object.values(formData).every(value => value !== '');
    setIsValid(valid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert(`Đăng ký thành công!\n\nUsername: ${formData.username}\nEmail: ${formData.email}`);
      handleCancel();
    }
  };

  const handleCancel = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
    setTouched({});
  };

  const getFieldStatus = (field) => {
    if (!touched[field]) return null;
    return errors[field] ? 'error' : 'success';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-indigo-100 rounded-full mb-4">
            <UserPlus className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Đăng Ký Tài Khoản</h1>
          <p className="text-gray-600">Tạo tài khoản mới để bắt đầu</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                onBlur={() => handleBlur('username')}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                  getFieldStatus('username') === 'error'
                    ? 'border-red-300 focus:ring-red-200'
                    : getFieldStatus('username') === 'success'
                    ? 'border-green-300 focus:ring-green-200'
                    : 'border-gray-300 focus:ring-indigo-200'
                }`}
                placeholder="Nhập username"
              />
              {getFieldStatus('username') && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {getFieldStatus('username') === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              )}
            </div>
            {touched.username && errors.username && (
              <p className="mt-1 text-sm text-red-600">{errors.username}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                  getFieldStatus('email') === 'error'
                    ? 'border-red-300 focus:ring-red-200'
                    : getFieldStatus('email') === 'success'
                    ? 'border-green-300 focus:ring-green-200'
                    : 'border-gray-300 focus:ring-indigo-200'
                }`}
                placeholder="example@email.com"
              />
              {getFieldStatus('email') && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {getFieldStatus('email') === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              )}
            </div>
            {touched.email && errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={() => handleBlur('password')}
                className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                  getFieldStatus('password') === 'error'
                    ? 'border-red-300 focus:ring-red-200'
                    : getFieldStatus('password') === 'success'
                    ? 'border-green-300 focus:ring-green-200'
                    : 'border-gray-300 focus:ring-indigo-200'
                }`}
                placeholder="Nhập password"
              />
              {getFieldStatus('password') && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {getFieldStatus('password') === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              )}
            </div>
            {touched.password && errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={() => handleBlur('confirmPassword')}
                className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                  getFieldStatus('confirmPassword') === 'error'
                    ? 'border-red-300 focus:ring-red-200'
                    : getFieldStatus('confirmPassword') === 'success'
                    ? 'border-green-300 focus:ring-green-200'
                    : 'border-gray-300 focus:ring-indigo-200'
                }`}
                placeholder="Nhập lại password"
              />
              {getFieldStatus('confirmPassword') && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {getFieldStatus('confirmPassword') === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              )}
            </div>
            {touched.confirmPassword && errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isValid}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition ${
                isValid
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Submit
            </button>
          </div>
        </form>

        {/* Password Requirements */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700 mb-2">Yêu cầu Password:</p>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Tối thiểu 8 ký tự</li>
            <li>• Có ít nhất 1 chữ hoa, 1 chữ thường</li>
            <li>• Có ít nhất 1 chữ số</li>
            <li>• Có ít nhất 1 ký tự đặc biệt (!@#$...)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}