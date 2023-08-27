import React, { useState } from 'react';
import './App.css';
import { Login } from './login';
import { Register } from './register';



function App() {

    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
  return (
    <>
    <div class="heading">
        <h1>Attendance Management System</h1>
    </div>
    <h1 id="school">Indraprastha International School </h1>
    <div className="App">
        {
            

            currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
        }
    </div>
    
    </>
  );
}

export default App;
