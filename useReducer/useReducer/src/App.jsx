import 'bootstrap/dist/css/bootstrap.min.css';
import CounterComponent from './components/CounterComponent';
import ToggleComponent from './components/ToggleComponent';
import QuestionBank from './components/QuestionBank';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import QuestionBankEx6 from './components/QuestionBankEx6';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';


function App() {
  return (
    <div className="App">
      <CounterComponent />
      <ToggleComponent />
      <QuestionBank />
      <QuestionBankEx6 />
      <LoginForm />
      <SignUpForm />
      
    </div>
  );
}

export default App;
