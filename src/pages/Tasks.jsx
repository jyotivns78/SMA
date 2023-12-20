import React, { useState } from 'react';
import Header from '../components/Header';
import { Button, Modal, Form } from 'react-bootstrap';
import '../assets/css/Task.css';
import Dropdown from 'react-bootstrap/Dropdown';

const AddTaskModal = ({ show, onHide, onSave }) => {
  const [taskName, setTaskName] = useState('');
  const [assignedBy, setAssignedBy] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [assignedDate, setAssignedDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('In Progress');

  const handleSave = () => {
    onSave({ taskName, assignedBy, assignedTo, assignedDate, dueDate, status });

    // Clear the input fields
    setTaskName('');
    setAssignedBy('');
    setAssignedTo('');
    setAssignedDate('');
    setDueDate('');
    setStatus('In Progress');

    // Hide the modal
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="taskName" className='mb-3'>
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="assignedBy" className='mb-3'>
            <Form.Label>Assigned By</Form.Label>
            <Form.Control
              type="text"
              value={assignedBy}
              onChange={(e) => setAssignedBy(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="assignedTo" className='mb-3'>
            <Form.Label>Assigned To</Form.Label>
            <Form.Control
              type="text"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="assignedDate" className='mb-3'>
            <Form.Label>Assigned Date</Form.Label>
            <Form.Control
              type="text"  // You might want to use type="date" for a date input
              value={assignedDate}
              onChange={(e) => setAssignedDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="dueDate" className='mb-3'>
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="text"  // You might want to use type="date" for a date input
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
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

const Tasks = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [tasks, setTasks] = useState([
    { taskName: 'Task 1', assignedBy: 'John Doe', assignedTo: 'Jane Smith', assignedDate: '22-11-2023', dueDate: '11-12-2023', status: 'In Progress' },
    // Add more existing tasks as needed
  ]);

  const handleSaveTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const mainContainerContent = (
    <>
      <section className="home facebook_home user_home">
        <div className="text facebook_text">
          <div className="heading_button">
            <h4 className="user_heading">Task Management</h4>
            <div>
              <Button onClick={() => setShowAddTaskModal(true)}>+ Add Task</Button>
            </div>
          </div>
          <section className='task_section'>
            <div className='row task_row'>
              {tasks.map((task, index) => (
                <div className='col-5 task_div' key={index}>
                  <div className='heading_dropdown d-flex justify-content-between'>
                    <h4>{task.taskName}</h4>
                    <Dropdown>
                      <Dropdown.Toggle id={`dropdown-basic-${index}`}>
                        {task.status}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">In Progress</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Done</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className='assign d-flex justify-content-between'>
                    <p>Assigned By : <span>{task.assignedBy}</span></p>
                    <p>Assigned To : <span>{task.assignedTo}</span></p>
                  </div>
                  <div className='assign d-flex justify-content-between'>
                    <p>Assigned Date : <span>{task.assignedDate}</span></p>
                    <p>Due Date : <span>{task.dueDate}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <AddTaskModal
        show={showAddTaskModal}
        onHide={() => setShowAddTaskModal(false)}
        onSave={handleSaveTask}
      />
    </>
  );

  return <Header mainContainerContent={mainContainerContent} />;
};

export default Tasks;
