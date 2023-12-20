import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter, faLinkedIn, faInstagram } from '@fortawesome/free-solid-svg-icons';
import { faGoogle as faGoogleBrand, faFacebook as faFacebookBrand, faTwitter as faTwitterBrand, faLinkedin as faLinkedInBrand, faInstagram as faInstagramBrand } from '@fortawesome/free-brands-svg-icons';
import Header from '../components/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../assets/css/SearchEngine.css';
import HomeTabContent from '../components/SearchEngine/HomeTabContent';

const SearchEngine = () => {
  const mainContainerContent = (
    <>
      <section className="home facebook_home search_home">
        <div className="text facebook_text">
          <h3 className="slide_heading">Search Engine</h3>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3 tabs_contain"
          >
            <Tab eventKey="home" title={<span className="brand-tab"><FontAwesomeIcon icon={faGoogleBrand} className="brand-icon google"  /> Google</span>}>
             
              <HomeTabContent />
            </Tab>
            <Tab eventKey="facebook" title={<span className="brand-tab"><FontAwesomeIcon icon={faFacebookBrand} className="brand-icon facebook" /> Facebook</span>}>
            <HomeTabContent />
            </Tab>
            <Tab eventKey="twitter" title={<span className="brand-tab"><FontAwesomeIcon icon={faTwitterBrand} className="brand-icon twitter" /> Twitter</span>}>
            <HomeTabContent />
            </Tab>
            <Tab eventKey="linkedin" title={<span className="brand-tab"><FontAwesomeIcon icon={faLinkedInBrand} className="brand-icon linkedin" /> LinkedIn</span>}>
            <HomeTabContent />
            </Tab>
            <Tab eventKey="instagram" title={<span className="brand-tab"><FontAwesomeIcon icon={faInstagramBrand} className="brand-icon instagram" /> Instagram</span>}>
            <HomeTabContent />
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );

  return <Header mainContainerContent={mainContainerContent} />;
};

export default SearchEngine;