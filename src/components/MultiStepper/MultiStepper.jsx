import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';
import "../../assets/css/MultiStepper.css";
import BusinessRegistration from './BusinessRegistration';
import BusinessDetails from './BusinessDetails';
import SocialMediaDetails from './SocialMediaDetails';
import SocialHandles from './SocialHandles';

  
 

function MultiStepper() {

    const [ activeStep, setActiveStep ] = useState(0);

  const steps = [
    { title: 'Business Registration' },
    { title: 'Business Details' },
    { title: 'Social Media Details' },
    { title: 'Social Handles' },
  ];

  function getSectionComponent() {
    switch(activeStep) {
      case 0: return <BusinessRegistration/>;
      case 1: return <BusinessDetails/>;
      case 2: return <SocialMediaDetails/>;
      case 3: return <SocialHandles/>;
      default: return null;
    }
  }

  return (
   <div className='stepper_container'>
      <Stepper
      
        steps={steps}
        activeStep={activeStep}/>
      <div style={{padding: '20px'}}>
        { getSectionComponent()  }
        { (activeStep !== 0 && activeStep !== steps.length - 1)
            && <button className='previous_button m_button' onClick={ () => setActiveStep(activeStep - 1) }>Previous</button>
        }
        { activeStep !== steps.length - 1
          && <button className='next_button m_button' onClick={ () => setActiveStep(activeStep + 1) }>Next</button>
        }
      </div>
    </div>
  );
}

export default MultiStepper;