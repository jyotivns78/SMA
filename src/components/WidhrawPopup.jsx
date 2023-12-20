import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const WithdrawalPopup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Withdrawal Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formAccountNumber" className='mb-2'>
            <Form.Label>Account Number</Form.Label>
            <Form.Control className='pt-2 pb-2' type="text" placeholder="Enter Account Number" />
          </Form.Group>
          <Form.Group controlId="formBank" className='mb-2'>
            <Form.Label>Choose Bank</Form.Label>
            <Form.Control as="select" className='pt-2 pb-2'>
              {/* Add your bank options here */}
              <option>Bank 1</option>
              <option>Bank 2</option>
              {/* Add more options as needed */}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBranch" className='mb-2'>
            <Form.Label>Enter Branch</Form.Label>
            <Form.Control className='pt-2 pb-2' type="text" placeholder="Enter Branch" />
          </Form.Group>
          <Form.Group controlId="formIFSC" className='mb-2'>
            <Form.Label>IFSC Code</Form.Label>
            <Form.Control className='pt-2 pb-2' type="text" placeholder="Enter IFSC Code" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" >
          Withdraw
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WithdrawalPopup;
