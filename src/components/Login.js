import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import axios from 'axios';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSignUp = () => {
    const url = 'http://localhost:5000';
    const formData = { firstName, lastName, password };

    axios
      .post(`${url}/user/`, formData)
      .then((response) => {
        console.log('User added to the database:', response.data);
        const newUser = response.data;
        loginUser(newUser);
        navigate('/profile');
      })
      .catch((error) => {
        alert('Error adding user: ' + error.message);
      });
  };

  const handleLogin = () => {
    const url = 'http://localhost:5000';
    const formData = { firstName, lastName, password };

    axios
      .post(`${url}/user/login`, formData)
      .then((response) => {
        console.log('User login successful', response.data);
        const userWithId = response.data;
        loginUser(userWithId);
        navigate('/profile');
      })
      .catch((error) => {
        alert('Unauthorized: ' + error.message);
      });
  };

  return (
    <div className="login-container">
      <img src="img/login.jpg" alt="Login" />
      <div className="login-form">
        <h2 className="login-header">Create an Account</h2>
        <form>
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="button" onClick={handleSignUp}>
            Sign up
          </button>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
