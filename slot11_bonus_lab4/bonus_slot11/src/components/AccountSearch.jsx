import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AccountSearch = () => {
  // Danh sách account mẫu
  const accounts = [
    { id: 1, username: "binhphan", password: "123456", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, username: "nguyenvana", password: "abcdef", avatar: "https://i.pravatar.cc/150?img=2" },
    { id: 3, username: "tranminh", password: "password", avatar: "https://i.pravatar.cc/150?img=3" },
    { id: 4, username: "lethuy", password: "qwerty", avatar: "https://i.pravatar.cc/150?img=4" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Lọc account theo username (không phân biệt hoa thường)
  const filteredAccounts = accounts.filter(acc =>
    acc.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🔍 Tìm kiếm Account</h2>

      {/* Ô tìm kiếm */}
      <div className="mb-4 text-center">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Nhập username cần tìm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Hiển thị kết quả */}
      <div className="row justify-content-center">
        {filteredAccounts.length > 0 ? (
          filteredAccounts.map((acc) => (
            <div className="col-md-3 mb-4" key={acc.id}>
              <div className="card text-center shadow">
                <img src={acc.avatar} className="card-img-top" alt={acc.username} />
                <div className="card-body">
                  <h5 className="card-title">{acc.username}</h5>
                  <p className="card-text">ID: {acc.id}</p>
                  <p className="card-text text-muted">Password: {acc.password}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5 className="text-center text-danger mt-4">Không tìm thấy kết quả</h5>
        )}
      </div>
    </div>
  );
};

export default AccountSearch;
