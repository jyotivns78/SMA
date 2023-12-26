// Login.jsx

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../assets/css/Login.css";
import { loginUser } from '../auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
  
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('https://saltinsocial.onrender.com/user/api/login', {
          email: formData.email,
          password: formData.password,
        });
  
        console.log('Server Response:', response.data);
  
        const { token } = response.data.data;
        const { id } = response.data;
  
        console.log('Extracted Token:', token);
        console.log('Extracted ID:', id);
  
        if (token && id) {
          console.log('Before dispatch', formData);
          dispatch(loginUser({
            token: token,
            id: id,
          }));
  
          navigate('/facebook_dashboard');
        } else {
          console.error('Login failed: Token or id is missing in the server response');
        }
      } catch (error) {
        console.error('Login failed:', error);
  
        if (error.response && error.response.status === 422) {
          console.log('Server Validation Errors:', error.response.data);
          // Handle validation errors from the server if needed
          // For example, update formErrors state with server validation errors
        }
      }
    } else {
      setFormErrors(errors);
    }
  };
  


  const validateForm = (data) => {
    const errors = {};

    if (!data.email.trim()) {
      errors.email = 'Username is required';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  return (
    <>
      <div className="container h-100 pt-5 pb-5">
        <div className="row h-100 justify-content-center align-items-center">
          <form className="col-md-9 login_form" onSubmit={handleSubmit}>
            <div className="AppForm shadow-lg">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="AppFormLeft">
                    <h1>Login</h1>
                    <div className="form-group position-relative mb-4">
                      <input
                        type="email"
                        className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none"
                        id="email"
                        placeholder="Username"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {formErrors.email && (
                        <small className="text-danger">{formErrors.email}</small>
                      )}
                    </div>
                    <div className="form-group position-relative mb-4">
                      <input
                        type="password"
                        className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none"
                        id="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {formErrors.password && (
                        <small className="text-danger">{formErrors.password}</small>
                      )}
                    </div>
                    <div className="row  mt-4 mb-4">
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label className="form-check-label" htmlFor="defaultCheck1">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 text-right">
                        <a href="#">Forgot Password?</a>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-block shadow border-0 py-2 text-uppercase">
                      Login
                    </button>
                    <p className="text-center mt-5">
                      Don't have an account?
                      <a href="/register">Create your account</a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="AppFormRight position-relative d-flex justify-content-center flex-column align-items-center text-center p-5 text-white">
                    <h2 className="position-relative px-4 pb-3 mb-4">Welcome</h2>
                    <p>Sign In To Continue With Your Account</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
