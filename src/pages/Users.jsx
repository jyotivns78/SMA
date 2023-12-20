import React, { useState } from 'react';
import Header from '../components/Header';
import { Button, Modal, Form } from 'react-bootstrap';
import '../assets/css/Users.css';

const AddUserModal = ({ show, onHide, onSave }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('Active');

  const handleSave = () => {
    onSave({ firstName, lastName, email, role, status });

    // Clear the input fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setRole('');
    setStatus('Active');

    // Hide the modal
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <div className='d-flex'>
        <Form.Group controlId="firstName" className='mx-1 mb-3'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="lastName" className='mb-3'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </div>
          <Form.Group controlId="email" className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="role" className='mb-3'>
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Blocked">Blocked</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const Users = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [users, setUsers] = useState([
    { firstName: 'John', lastName: 'Mark', email: 'john@example.com', role: '@mdo', status: 'Active' },
    // Add more existing users as needed
  ]);

  const handleSaveUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const mainContainerContent = (
    <>
      <section className="home facebook_home user_home">
        <div className="text facebook_text">
          <div className="heading_button">
            <h4 className="user_heading">Users</h4>
            <div>
              <Button onClick={() => setShowAddUserModal(true)}>+ Add User</Button>
            </div>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <AddUserModal
        show={showAddUserModal}
        onHide={() => setShowAddUserModal(false)}
        onSave={handleSaveUser}
      />
    </>
  );

  return <Header mainContainerContent={mainContainerContent} />;
};

export default Users;
