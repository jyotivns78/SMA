import React, { useState } from 'react';
import Header from '../components/Header';
import { Button, Modal, Form } from 'react-bootstrap';
import '../assets/css/Users.css';


  
const Logs = () => {
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
         <h2 className='text-center pt-3 pb-3'>Logs Page</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Property Name</th>
                <th scope="col">Network Type</th>
                <th scope="col">Section</th>
                <th scope="col">Level</th>
                <th scope="col">Action</th>
                <th>Message</th>
                <th>Time</th>
                <th>Action By</th>
              </tr>
            </thead>
            <tbody>
             
                <tr>
                  <td>Property 1</td>
                  <td>Wi-Fi</td>
                  <td>Setting</td>
                  <td>Info</td>
                  <td>Update</td>
                  <td>Updated Network Setting</td>
                  <td>2023-06-08 10:23:45</td>
                  <td>John Doe</td>
                </tr>
                <tr>
                  <td>Property 2</td>
                  <td>Ethernet</td>
                  <td>Security</td>
                  <td>Warning</td>
                  <td>Delete</td>
                  <td>Deleted User Account</td>
                  <td>2023-06-08 10:23:45</td>
                  <td>Jane Smith</td>
                </tr>
            
            </tbody>
          </table>
        </div>
      </section>

     
    </>
  );

  return <Header mainContainerContent={mainContainerContent} />;
};

export default Logs;
