import React, { useState, useContext } from 'react';
import './CSS/LoginSignup.css';
import { AuthContext } from '../Context/AuthContext';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  const { login } = useContext(AuthContext);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    console.log("login function executed", formData);

    // Admin credentials
    const adminEmail = "sarala@gmail.com";
    const adminPassword = "12345";
    const adminUrl = "http://localhost:5173/";

    // Check if admin
    if (formData.email === adminEmail && formData.password === adminPassword) {
      // Admin login successful
      localStorage.setItem('auth-token', 'admin-token');
      window.location.replace(adminUrl);
      return;
    }

    // Regular user login
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      login(responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("sign up function executed", formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      login(responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Username' /> : <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password' />
        </div>
        <button onClick={() => { state === "Login" ? loginHandler() : signup() }}>Submit</button>

        {state === "Sign Up"
          ? <p className='loginsignup-login'>Already have an account?<span onClick={() => { setState("Login") }}>Login here </span></p>
          : <p className='loginsignup-login'>Create an account?<span onClick={() => { setState("Sign Up") }}>Click here </span></p>}
      </div>
    </div>
  );
};

export default LoginSignup;
