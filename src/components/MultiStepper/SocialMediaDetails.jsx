import React from 'react';
import Form from 'react-bootstrap/Form';

const SocialMediaDetails = () => {
  return (
    <div>
      <h2 className='text-center pt-3 pb-3'>Social Media Details</h2>
      <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Facebook Url</Form.Label>
        <Form.Control className='pt-2 pb-2' type="text" placeholder="Enter Facebook Url" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Instagram Url</Form.Label>
        <Form.Control className='pt-2 pb-2' type="text" placeholder="Enter Instagram Url" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Google Ads Url</Form.Label>
        <Form.Control className='pt-2 pb-2' type="text" placeholder="Enter Google Ads Url" />
      </Form.Group>
    </Form>
    </div>
  )
}

export default SocialMediaDetails