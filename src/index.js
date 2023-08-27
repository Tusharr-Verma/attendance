import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitFun = (e) => {
    e.preventDefault();

    if (username === "bla" && password === "bla") {
      window.location.href = "student.html";
    } else {
      alert("Invalid username or password");
      setUsername('');
      setPassword('');
    }
  };

}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LoginForm />
    <App />
  </React.StrictMode>
);

reportWebVitals();
