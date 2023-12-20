import React from 'react';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';

const SocialHandles = () => {
  return (
    <div>
    <h2 className='text-center pt-3 pb-3'>Social Media Details</h2>
    <Form>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Website</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>About</Form.Label>
      <Form.Control className='pt-2 pb-2' as="textarea" placeholder="About" />
    </Form.Group>

    
  </Form>
  </div>
  )
}

export default SocialHandles