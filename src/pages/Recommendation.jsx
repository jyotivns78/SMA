import React, { useState } from 'react';
import Header from '../components/Header';
import { InputGroup, Row, Form, Button } from 'react-bootstrap';
import '../assets/css/Users.css';
import { faArrowUp  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import LeadGeneration from '../components/Analytics/LeadGeneration';
import Lead from '../components/Analytics/Lead';
import CircularChart from '../components/Analytics/CircularChart';

  
const Recommendation = () => {
 

  const mainContainerContent = (
    <>
     <section className="home facebook_home user_home">
        <div className="text facebook_text">
          
          <section className='task_section'>
            <div className='row d-flex flex-wrap '>
                <div className='col-4 ' >
                 
                  <div className='assign d-flex flex-column reco_div'>
                    <p>Name : <span>John</span></p>
                    <p>Phone : <span>+91 7856345678</span></p>
                    <p>Email : <span>abc@gmail.com</span></p>
                  </div>
                
                </div>

                <div className='col-4 ' >
                 
                <div className='assign d-flex flex-column reco_div'>
                    <p>Name : <span>John</span></p>
                    <p>Phone : <span>+91 7856345678</span></p>
                    <p>Email : <span>abc@gmail.com</span></p>
                  </div>
               
               </div>

               <div className='col-4 ' >
                 
               <div className='assign d-flex flex-column reco_div'>
                    <p>Name : <span>John</span></p>
                    <p>Phone : <span>+91 7856345678</span></p>
                    <p>Email : <span>abc@gmail.com</span></p>
                  </div>
               
               </div>

               <div className='col-4 ' >
                 
               <div className='assign d-flex flex-column reco_div'>
                    <p>Name : <span>John</span></p>
                    <p>Phone : <span>+91 7856345678</span></p>
                    <p>Email : <span>abc@gmail.com</span></p>
                  </div>
               
               </div>

               <div className='col-4 ' >
                 
                 <div className='assign d-flex flex-column reco_div'>
                      <p>Name : <span>John</span></p>
                      <p>Phone : <span>+91 7856345678</span></p>
                      <p>Email : <span>abc@gmail.com</span></p>
                    </div>
                 
                 </div>

                 <div className='col-4 ' >
                 
                 <div className='assign d-flex flex-column reco_div'>
                      <p>Name : <span>John</span></p>
                      <p>Phone : <span>+91 7856345678</span></p>
                      <p>Email : <span>abc@gmail.com</span></p>
                    </div>
                 
                 </div>

                 <div className='col-4 ' >
                 
                 <div className='assign d-flex flex-column reco_div'>
                      <p>Name : <span>John</span></p>
                      <p>Phone : <span>+91 7856345678</span></p>
                      <p>Email : <span>abc@gmail.com</span></p>
                    </div>
                 
                 </div>
            
            </div>
          </section>
        </div>
      </section>

   

     
    </>
  );

  return <Header mainContainerContent={mainContainerContent} />;
};

export default Recommendation;

