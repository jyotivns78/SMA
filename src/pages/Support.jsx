import React, { useState } from 'react';
import Header from '../components/Header';
import { InputGroup, Row, Form } from 'react-bootstrap';
import '../assets/css/Users.css';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


  
const Support = () => {
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
        
       <div className='row'>
        <div className='col-8'>
        <h2 className='text-center pt-3 pb-3'>Contact With Our Support Team</h2>
        <form className="container mt-3 mb-3 pt-5 support_form">
    <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="name" name="first_name" placeholder="Enter Your First Name"  className="form-control" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="name" name="last_name" placeholder="Enter Your Last Name"  className="form-control" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formBasicMobile" className="col col-sm-6">
            <Form.Label>Mobile Number</Form.Label>
            <InputGroup>
                <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                <Form.Control aria-label="Mobile Number" type="mobile" aria-describedby="basic-addon1" className="form-control" name="mobile" placeholder="Enter Mobile Number" />
            </InputGroup>
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Email</Form.Label>
            <InputGroup>
                <Form.Control aria-label="Recipient's username" aria-describedby="basic-addon2" type="email" name="email" placeholder="Enter Your Email" />
                <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
            </InputGroup>
        </Form.Group>
    </Row>
   
   
    <Row className="mb-3">
       
        <Form.Group controlId="formGridlabel" className="col col-sm-12">
            <Form.Label>Order Details</Form.Label>
            <Form.Control as="textarea" rows="{4}" className="form-control" name="order" placeholder="Your Description goes here..."  />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6r button_d ">
            <button type="submit" className=" btn btn-success btn-lg btn-block ">Submit</button>
        </Form.Group>
    </Row>
</form>
        </div>
        <div className='col-4 right_container'>
        <div class="container bootstrap snippets bootdeys chatss">
<div class="col-md-12 col-xs-12 col-md-offset-2">
  <div class="panel" id="chat">
    <div class="panel-heading">
      <h3 class="panel-title">
      <FontAwesomeIcon icon={faComment} />  Support
      </h3>
    </div>
    <div class="panel-body">
      <div class="chats">
        <div class="chat">
          <div class="chat-avatar">
            <a class="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="June Lane">
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." />
              <i></i>
            </a>
          </div>
          <div class="chat-body">
            <div class="chat-content">
              <p>
                Good morning, sir.
                <br />What can I do for you?
              </p>
              <time class="chat-time" datetime="2015-07-01T11:37">11:37:08 am</time>
            </div>
          </div>
        </div>
        <div class="chat chat-left">
          <div class="chat-avatar">
            <a class="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="Edward Fletcher">
              <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..." />
              <i></i>
            </a>
          </div>
          <div class="chat-body">
            <div class="chat-content">
              <p>Well, I am just looking around.</p>
              <time class="chat-time" datetime="2015-07-01T11:39">11:39:57 am</time>
            </div>
          </div>
        </div>
        <div class="chat">
          <div class="chat-avatar">
            <a class="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="June Lane">
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." />
              <i></i>
            </a>
          </div>
          <div class="chat-body">
            <div class="chat-content">
              <p>
                If necessary, please ask me.
              </p>
              <time class="chat-time" datetime="2015-07-01T11:40">11:40:10 am</time>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel-footer">
      <form>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Say something" />
          <span class="input-group-btn">
            <button class="btn btn-primary send_button" type="button">Send</button>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
        </div>
       </div>
        </div>
      </section>

     
    </>
  );

  return <Header mainContainerContent={mainContainerContent} />;
};

export default Support;
