import React, { useState } from 'react';
import Header from '../components/Header';
import { InputGroup, Row, Form } from 'react-bootstrap';
import '../assets/css/Users.css';
import { faArrowUp  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import LeadGeneration from '../components/Analytics/LeadGeneration';
import Lead from '../components/Analytics/Lead';
import CircularChart from '../components/Analytics/CircularChart';

  
const Analytics = () => {
 

  const mainContainerContent = (
    <>
      <section className="home facebook_home user_home">
        <div className="text facebook_text">
        
      <div className='row'>
        <div className='card_contain d-flex flex-wrap justify-content-around'>
            <div className='col-3 '>
            <Card className='card1 all_card'>
      <Card.Body>
        <Card.Title className='text-center card_titles'>Leads this month from Facebook</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center pt-4 pb-1 card_sub_title">Increase 100% <FontAwesomeIcon icon={faArrowUp } /> </Card.Subtitle>
       
       
      </Card.Body>
    </Card>
            </div>
            <div className='col-3 '>
            <Card className='card2 all_card'>
      <Card.Body>
        <Card.Title className='text-center card_titles'>Leads this month from Instagram</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center pt-4 pb-1 card_sub_title">Increase 100% <FontAwesomeIcon icon={faArrowUp } /> </Card.Subtitle>
       
       
      </Card.Body>
    </Card>
            </div>
            <div className='col-3 '>
            <Card className='card3 all_card'>
      <Card.Body>
        <Card.Title className='text-center card_titles'>Leads this month from Google Ads</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center pt-4 pb-1 card_sub_title">Increase 100% <FontAwesomeIcon icon={faArrowUp } /> </Card.Subtitle>
       
       
      </Card.Body>
    </Card>
            </div>
            <div className='col-3 '>
            <Card className='card4 all_card'>
      <Card.Body>
        <Card.Title className='text-center card_titles'>Leads this month from Twitter</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center pt-4 pb-1 card_sub_title">Increase 100% <FontAwesomeIcon icon={faArrowUp } /> </Card.Subtitle>
       
       
      </Card.Body>
    </Card>
            </div>
        </div>
      </div>
        </div>
      </section>

      <section className='charts_Section'>
      <div className='row'>
        <div className='card_contain d-flex flex-wrap justify-content-around'>
            <div className='col-6 '>
            <LeadGeneration />
            </div>
            <div className='col-6 '>
           <Lead />
            </div>
            <div className='col-6'>
            <CircularChart />
            </div>
          
        </div>
      </div>
      </section>

     
    </>
  );

  return <Header mainContainerContent={mainContainerContent} />;
};

export default Analytics;

