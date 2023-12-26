import React, { useState } from 'react';
import "../assets/css/Register.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Button, Tab, Nav } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      companyName: "",
      companyEmail: "",
      password: "",
      confirmPassword: "",
    });
    const navigate = useNavigate();

    const validateForm = () => {
      // Clear previous errors
      setErrors({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        companyName: "",
        companyEmail: "",
        password: "",
        confirmPassword: "",
        general: ""
      });
  
      // Add your validation logic here
      let isValid = true;
  
      // Validation for First Name (minimum 3 characters)
      if (!firstName) {
        setErrors((prevErrors) => ({ ...prevErrors, firstName: "First Name is required." }));
        isValid = false;
      } else if (firstName.length < 3) {
        setErrors((prevErrors) => ({ ...prevErrors, firstName: "First Name should have at least 3 characters." }));
        isValid = false;
      }
  
      // Validation for Last Name (minimum 3 characters)
      if (!lastName) {
        setErrors((prevErrors) => ({ ...prevErrors, lastName: "Last Name is required." }));
        isValid = false;
      } else if (lastName.length < 3) {
        setErrors((prevErrors) => ({ ...prevErrors, lastName: "Last Name should have at least 3 characters." }));
        isValid = false;
      }
  
      // Validation for Phone Number (exactly 10 digits)
      if (!phone) {
        setErrors((prevErrors) => ({ ...prevErrors, phone: "Phone number is required." }));
        isValid = false;
      } else if (!/^\d{10}$/.test(phone)) {
        setErrors((prevErrors) => ({ ...prevErrors, phone: "Phone number should be exactly 10 digits." }));
        isValid = false;
      }
  
      // Validation for Email (basic email pattern)
      if (!email) {
        setErrors((prevErrors) => ({ ...prevErrors, email: "Email is required." }));
        isValid = false;
      } else {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
          setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid email address." }));
          isValid = false;
        }
      }
  
      // Validation for Company Name
      if (!companyName) {
        setErrors((prevErrors) => ({ ...prevErrors, companyName: "Company Name is required." }));
        isValid = false;
      }
  
      // Validation for Company Email (basic email pattern)
      if (!companyEmail) {
        setErrors((prevErrors) => ({ ...prevErrors, companyEmail: "Company Email is required." }));
        isValid = false;
      } else {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(companyEmail)) {
          setErrors((prevErrors) => ({ ...prevErrors, companyEmail: "Invalid email address." }));
          isValid = false;
        }
      }
  
      // Validation for Password (minimum 8 characters with at least one number)
      if (!password) {
        setErrors((prevErrors) => ({ ...prevErrors, password: "Password is required." }));
        isValid = false;
      } else if (password.length < 8 || !/\d/.test(password)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password should be at least 8 characters and contain at least one number.",
        }));
        isValid = false;
      }
  
      // Validation for Confirm Password
      if (!confirmPassword) {
        setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "Confirm Password is required." }));
        isValid = false;
      } else if (password !== confirmPassword) {
        setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "Passwords do not match." }));
        isValid = false;
      }
  
      return isValid;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!validateForm()) {
        return;
      }
      const headers = {
        'Content-Type': 'application/json', // Specify the content type as JSON
        // Add any additional headers if required (e.g., authorization token)
      };
  
      axios
        .post("https://saltinsocial.onrender.com/user/api/register", {
          firstName,
          lastName,
          phone,
          email,
          companyName,
          companyEmail,
          password,
          confirmPassword,
        }, { headers })
        .then((response) => {
          console.log(response);
          navigate('/login');
        })
        .catch((error) => {
          console.error(error);
          setErrors((prevErrors) => ({
            ...prevErrors,
            general: "Registration failed. Please check your information and try again.",
          }));
        });
    };







  

  return (
    <>
    <div className="container register">
                <div className="row register_row">
                    <div className="col-md-3 register-left">
                    <div className='left_con'>
                    <img src="https://img.freepik.com/premium-vector/register-now-icon-flat-style-registration-vector-illustration-isolated-background-member-notification-sign-business-concept_157943-757.jpg" alt=""/>
                        <h3>Welcome</h3>
                        <p>To keep connected with us please login with your personal info</p>
                        <Link to="/login"> <input type="submit" name="" value="Login"/><br/></Link>
                    </div>
                    </div>
                    <div className="col-md-9 register-right">
                       
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Register Now</h3>
                                <Form onSubmit={handleSubmit}>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                      
                                    <Form.Group className="mb-3">
                  <Form.Label className="form_label">First Name *</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text icon_d">
                      <i className="bi bi-person"></i>
                    </span>
                    <Form.Control
                      className="custom-padding"
                      type="text"
                      placeholder="First Name *"
                      name="firstName"
                      onChange={(e) => setFirstName(e.target.value)} 
                    />
                    
                  </div>
                  <div className="text-danger">{errors.firstName}</div>
                
                </Form.Group>
                      <Form.Group className="mb-3">
  <Form.Label className="form_label">Last Name *</Form.Label>
  <div className="input-group">
    <span className="input-group-text icon_d">
      <i className="bi bi-person"></i>
    </span>
    <Form.Control
      className="custom-padding"
      type="text"
      placeholder="Last Name *"
      name="lastName"
      onChange={(e) => setLastName(e.target.value)} 
    />
  </div>
  <div className="text-danger">{errors.lastName}</div>
</Form.Group>

<Form.Group className="mb-3">
  <Form.Label className="form_label">Your Phone *</Form.Label>
  <div className="input-group">
    <span className="input-group-text icon_d">
      <i className="bi bi-phone"></i>
    </span>
    <Form.Control
      className="custom-padding"
      type="text"
      minLength="10"
      maxLength="10"
      name="phone"
      placeholder="Your Phone *"
      onChange={(e) => setPhone(e.target.value)} 
    />
  </div>
  <div className="text-danger">{errors.phone}</div>
</Form.Group>

<Form.Group className="mb-3">
  <Form.Label className="form_label">Email *</Form.Label>
  <div className="input-group">
    <span className="input-group-text icon_d">
      <i className="bi bi-envelope"></i>
    </span>
    <Form.Control
      className="custom-padding"
      type="email"
      placeholder="Your Email *"
      name="email"
      onChange={(e) => setEmail(e.target.value)} 
    />
  </div>
  <div className="text-danger">{errors.email}</div>
</Form.Group>


                                    </div>
                                    <div className="col-md-6">
                                    <Form.Group className="mb-3">
  <Form.Label className="form_label">Company Name *</Form.Label>
  <div className="input-group">
    <span className="input-group-text icon_d">
      <i className="bi bi-question"></i>
    </span>
    <Form.Control
      type="text"
      className="form-control custom-padding"
      placeholder="Your Company Name *"
      name="companyName"
      onChange={(e) => setCompanyName(e.target.value)} 
    />
  </div>
  <div className="text-danger">{errors.companyName}</div>
</Form.Group>

<Form.Group className="mb-3">
  <Form.Label className="form_label">Company Email *</Form.Label>
  <div className="input-group">
    <span className="input-group-text icon_d">
      <i className="bi bi-envelope"></i>
    </span>
    <Form.Control
      className="custom-padding"
      type="email"
      placeholder="Your Email *"
      name="companyEmail"
      onChange={(e) => setCompanyEmail(e.target.value)} 
    />
  </div>
  <div className="text-danger">{errors.companyEmail}</div>
</Form.Group>

<Form.Group className="mb-3">
  <Form.Label className="form_label">Password *</Form.Label>
  <div className="input-group">
    <span className="input-group-text icon_d">
      <i className="bi bi-lock"></i>
    </span>
    <Form.Control
      className="custom-padding"
      type="password"
      placeholder="Password *"
      name="password"
      onChange={(e) => setPassword(e.target.value)} 
    />
  </div>
  <div className="text-danger">{errors.password}</div>
</Form.Group>

<Form.Group className="mb-3">
  <Form.Label className="form_label">Confirm Password *</Form.Label>
  <div className="input-group">
    <span className="input-group-text icon_d">
      <i className="bi bi-lock"></i>
    </span>
    <Form.Control
      className="custom-padding"
      type="password"
      placeholder="Password *"
      name="confirmPassword"
      onChange={(e) => setConfirmPassword(e.target.value)} 
    />
  </div>
  <div className="text-danger">{errors.confirmPassword}</div>
</Form.Group>
                 


                                        <input type="submit" className="btnRegister"  value="Register"/>
                                        <div className="mb-3 text-danger">{errors.general}</div>
                                    </div>
                                </div>
                                </Form>
                            </div>
                           
                        </div>
                    </div>
                </div>

            </div>
    </>
  )
}

export default Register;