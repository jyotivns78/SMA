import React from 'react';
import Slider from 'react-slick';
import Header from '../components/Header';
import '../assets/css/Automation.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide1 from '../assets/images/slide1.png';
import Whatsapp from '../assets/images/automation/whatsapp.png';
import Facebook from '../assets/images/automation/facebook.png';
import Instagram from '../assets/images/automation/instagram.png';
import Telegram from '../assets/images/automation/twitter.png';
import WeChat from '../assets/images/automation/wechat.png';
import Skype from '../assets/images/automation/skype.png';
import GoogleBusiness from '../assets/images/automation/google_business.png';

const Automation = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const mainContainerContent = (
    <>
    <section className="home facebook_home automation_home">
      <div className="text facebook_text">
        <h3 className='slide_heading'>Automation</h3>
        <div className="image-carousel-container">
          <Slider {...sliderSettings}>
            <div>
              <img src={ Slide1 } alt="Image 1" className="carousel-image" />
            </div>
            <div>
              <img src={ Slide1 } alt="Image 2" className="carousel-image" />
            </div>
            <div>
              <img src={ Slide1 } alt="Image 3" className="carousel-image" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
    <section className='cards_section'>
        <div className='row cards_row'>
            <div className='col-4 mb-4 text-center'>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Whatsapp } />
        <Card.Body>
          <Card.Title>Whatsapp</Card.Title>
          <Button variant="primary">Connect +</Button>
        </Card.Body>
      </Card>
            </div>
            <div className='col-4 mb-4 text-center'>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ Facebook } />
        <Card.Body>
          <Card.Title>Facebook</Card.Title>
          <Button variant="primary">Connect +</Button>
        </Card.Body>
      </Card>
            </div>
            <div className='col-4 mb-4 text-center'>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ Instagram } />
        <Card.Body>
          <Card.Title>Instagram</Card.Title>
          <Button variant="primary">Connect +</Button>
        </Card.Body>
      </Card>
            </div>
            <div className='col-4 mb-4 text-center'>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ Telegram } />
        <Card.Body>
          <Card.Title>Telegram</Card.Title>
          <Button variant="primary">Connect +</Button>
        </Card.Body>
      </Card>
            </div>
            <div className='col-4 mb-4 text-center'>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ WeChat } />
        <Card.Body>
          <Card.Title>WeChat</Card.Title>
          <Button variant="primary">Connect +</Button>
        </Card.Body>
      </Card>
            </div>
            <div className='col-4 mb-4 text-center'>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ Skype } />
        <Card.Body>
          <Card.Title>Skype</Card.Title>
          <Button variant="primary">Connect +</Button>
        </Card.Body>
      </Card>
            </div>
            <div className='col-4 mb-4 text-center'>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ GoogleBusiness } />
        <Card.Body>
          <Card.Title>Google Business</Card.Title>
          <Button variant="primary">Connect +</Button>
        </Card.Body>
      </Card>
            </div>
        </div>
    </section>
    </>
  );

  return <Header mainContainerContent={mainContainerContent} />;
};

export default Automation;
