import React, { useState } from 'react';
import Header from '../components/Header';
import '../assets/css/Users.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import "../assets/css/Task.css";
import WithdrawalPopup from '../components/WidhrawPopup';

  
const Wallet = () => {
 
  const [showWithdrawalPopup, setShowWithdrawalPopup] = useState(false);

  const handleWithdrawalClick = () => {
    setShowWithdrawalPopup(true);
  };

  const handleCloseWithdrawalPopup = () => {
    setShowWithdrawalPopup(false);
  };

  const mainContainerContent = (
    <>
     <section className="home facebook_home user_home">
        <div className="text facebook_text">
          
          <section className='task_section'>
          <h2 className='text-center'>SMA Wallet</h2>
          <div className='row'>
            <div className='box_container d-flex pt-3 pb-3'>
              <div className='amount_box col-6'>
              <Form className='wallet_form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Amount</Form.Label>
          <Form.Control className='pt-2 pb-2' type="text" placeholder="Enter Amount" />
        </Form.Group>
        <div className='bu_div'>
          <Button variant="primary" onClick={handleWithdrawalClick}>
            Withdraw
          </Button>
          <Button variant="primary" type="submit">
            Add Money
          </Button>
        </div>
      </Form>
              </div>
              <div className='current_amount col-6'>
                <div className='amounts'>
                  <p>Current Amount : 0</p>
                </div>
              </div>
            </div>
          </div>
          </section>

          <WithdrawalPopup show={showWithdrawalPopup} handleClose={handleCloseWithdrawalPopup} />

          <section className='transaction_history_div pt-3 pb-3 mt-4'>
          <h2 className='text-center'>Transaction History</h2>
          <table className="table table-striped transaction_table mt-3">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Transaction Type</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
             
                <tr>
                  <td>12-12-2023</td>
                  <td>Withraw</td>
                  <td>200/-</td>
                </tr>
                <tr>
                  <td>12-12-2023</td>
                  <td>Withraw</td>
                  <td>200/-</td>
                </tr>
            
            </tbody>
          </table>
          </section>
        </div>
      </section>

   

     
    </>
  );

  return <Header mainContainerContent={mainContainerContent} />;
};

export default Wallet;



