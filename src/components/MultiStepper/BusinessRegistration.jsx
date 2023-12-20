import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BusinessRegistration = () => {
  return (
    <div>
      <h2 className='text-center pt-3 pb-3'>Business Registration</h2>
      <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Business Name</Form.Label>
        <Form.Control className='pt-2 pb-2' type="text" placeholder="Enter Business Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className='pt-2 pb-2' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control className='pt-2 pb-2' type="number" placeholder="Mobile Number" />
        <Form.Text className="text-muted">
          We'll never share your Mobile number with anyone else.
        </Form.Text>
      </Form.Group>
    </Form>
    </div>
  );
};

export default BusinessRegistration;
