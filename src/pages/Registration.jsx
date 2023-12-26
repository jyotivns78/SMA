import React, { useState } from 'react';
import "../assets/css/Register.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Button, Tab, Nav } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Registration = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    companyName: '',
    companyEmail: '',
    password: '',
    confirmPassword: '',
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
        const response = await axios.post(
          'https://saltinsocial.onrender.com/user/api/register',
          formData
        );

        console.log('Server Response:', response.data);

        navigate('/login');
      } catch (error) {
        console.error('Error during registration:', error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
  
    // Validate each field
    if (!data.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
  
    if (!data.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }
  
    if (!data.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(data.phone.trim())) {
      errors.phone = 'Phone must be 10 digits';
    }
  
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email.trim())) {
      errors.email = 'Invalid email address';
    }
  
    if (!data.companyName.trim()) {
      errors.companyName = 'Company Name is required';
    }
  
    if (!data.companyEmail.trim()) {
      errors.companyEmail = 'Company Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.companyEmail.trim())) {
      errors.companyEmail = 'Invalid company email address';
    }
  
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
  
    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
  
    return errors;
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
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  {formErrors.firstName && (
                    <small className="text-danger">{formErrors.firstName}</small>
                  )}
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
      value={formData.lastName}
      onChange={handleChange}
    />
  </div>
  {formErrors.lastName && (
    <small className="text-danger">{formErrors.lastName}</small>
  )}
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
      value={formData.phone}
      onChange={handleChange}
    />
  </div>
  {formErrors.phone && (
    <small className="text-danger">{formErrors.phone}</small>
  )}
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
      value={formData.email}
      onChange={handleChange}
    />
  </div>
  {formErrors.email && (
    <small className="text-danger">{formErrors.email}</small>
  )}
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
      value={formData.companyName}
      onChange={handleChange}
    />
  </div>
  {formErrors.companyName && (
    <small className="text-danger">{formErrors.companyName}</small>
  )}
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
      value={formData.companyEmail}
      onChange={handleChange}
    />
  </div>
  {formErrors.companyEmail && (
    <small className="text-danger">{formErrors.companyEmail}</small>
  )}
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
      value={formData.password}
      onChange={handleChange}
    />
  </div>
  {formErrors.password && (
    <small className="text-danger">{formErrors.password}</small>
  )}
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
      value={formData.confirmPassword}
      onChange={handleChange}
    />
  </div>
  {formErrors.confirmPassword && (
    <small className="text-danger">{formErrors.confirmPassword}</small>
  )}
</Form.Group>
                 


                                        <input type="submit" className="btnRegister"  value="Register"/>
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

export default Registration