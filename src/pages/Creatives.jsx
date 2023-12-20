import React, { useState } from 'react';
import Header from '../components/Header';
import { Button, Modal, Form } from 'react-bootstrap';
import '../assets/css/Creatives.css';



const Creatives = () => {

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

 

 
 
  const mainContainerContent = (
    <>
      <section className="home facebook_home user_home">
        <div className="text facebook_text pt-3">
        <div class="hero row flex-md-row-reverse no-gutters">
  <div class="col-md-6 hero">
  
        <form className='creative_form'>
         

          <fieldset>
            <legend>
             Schedule A Call
            </legend>

            <input
              type="email"
              id="mail"
              name="user_email"
              placeholder='Enter Your Email*'
            />

            
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder='Enter Your Phone Number'
            />

        
           

         
            <input
              type="date"
              id="password"
              name="user_password"
            />


          <input
            type="time"
            id="time"
            name="user_time"
          />

           
          
          </fieldset>

          <p>Get Easy Update Through</p>


          <div className="whatsapp_div d-flex justify-content-around pb-3">
                    <span>
                      <i className="fab fa-whatsapp"></i>WhatsApp
                    </span>

                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      onChange={handleSwitchChange}
                      checked={isSwitchOn}
                    />
                  </div>

     

          <button type="submit">Submit</button>
        </form>
    
  </div>
  <div class="col-md-6 hero hero-has-background">
  
  <h2>Not Getting Any Idea For Creating New Ads ??</h2>
  <h1>Consult With Our Creative Team</h1>
   Schedule A Call On Your Free Time
    </div>

</div>
        </div>
      </section>

    
    </>
  );

  return <Header mainContainerContent={mainContainerContent} />;
};

export default Creatives;

