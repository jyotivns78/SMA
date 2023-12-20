import React, { useState } from 'react';
import Header from '../components/Header';
import '../assets/css/Users.css';
import MultiStepper from '../components/MultiStepper/MultiStepper';


  
const BusinessName = () => {
 

  const mainContainerContent = (
    <>
     <section className="home facebook_home user_home">
        <div className="text facebook_text">
          
          <section className='task_section'>
          <MultiStepper />
          </section>
        </div>
      </section>

   

     
    </>
  );

  return <Header mainContainerContent={mainContainerContent} />;
};

export default BusinessName;


