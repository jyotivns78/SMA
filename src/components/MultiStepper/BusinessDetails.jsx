import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BusinessDetails = () => {
  return (
    <div>
    <h2 className='text-center pt-3 pb-3'>Business Details</h2>
    <Form>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Country / Region</Form.Label>
      <Form.Select aria-label="Default select example">
      <option>Select Option</option>
      <option value="1">India</option>
      <option value="2">United State</option>
      <option value="3">Canada</option>
      <option value="4">Mexico</option>
    </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Street address</Form.Label>
      <Form.Control className='pt-2 pb-2' type="text" placeholder="Street Address" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>City</Form.Label>
      <Form.Control className='pt-2 pb-2' type="text" placeholder="City" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>State / Province</Form.Label>
      <Form.Control className='pt-2 pb-2' type="text" placeholder="State" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Zip / Postal</Form.Label>
      <Form.Control className='pt-2 pb-2' type="number" placeholder="Zip / Postal" />
    </Form.Group>
  </Form>
  </div>
  )
}

export default BusinessDetails