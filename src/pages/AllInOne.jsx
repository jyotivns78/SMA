import React, { useState } from 'react';
import Header from '../components/Header';
import { Button, Modal, Form } from 'react-bootstrap';
import '../assets/css/Users.css';
import "../assets/css/AllInOne.css";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useDrag, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

  
const AllInOne = () => {
  

  const DraggableCard = ({ children, id }) => {
    const [, drag] = useDrag({
      type: 'CARD',
      item: { id },
    });
  
    return (
      <div ref={drag} style={{ cursor: 'move' }}>
        {children}
      </div>
    );
  };

  const mainContainerContent = (
    <>
     <DndProvider backend={HTML5Backend}>
      <section className="home facebook_home user_home">
        <div className="text facebook_text">
         <h2 className='text-center pt-3 pb-3'>All In One</h2>

      
         <main id="theme">
    <section class="top__section">
      <div class="top__section-header container">
        <div>
          <h1 class="title">Social Media Dashboard</h1>
          <p class="subtitle">Total Followers: 23,004</p>
        </div>
       
      </div>
      <div class="card__grid container">
        <div class="card-top facebook">
          <div class="social-account">
           {/* icon */}
            @nathanf
          </div>
          <div class="social-data-monthly">
            <span class="data-number">1987</span>
            <span class="data-type">followers</span>
          </div>
          <div class="data up">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
              <path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" />
            </svg>
            12 Today
          </div>
        </div>
        <div class="card-top twitter">
          <div class="social-account">
           {/* icon */}
            @nathanf
          </div>
          <div class="social-data-monthly">
            <span class="data-number">1044</span>
            <span class="data-type">followers</span>
          </div>
          <div class="data up">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
              <path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" />
            </svg>
            99 Today
          </div>
        </div>
        <div class="card-top instagram">
          <div class="social-account">
             {/* icon */}
            @nathanf
          </div>
          <div class="social-data-monthly">
            <span class="data-number">11k</span>
            <span class="data-type">followers</span>
          </div>
          <div class="data up">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
              <path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" />
            </svg>
            1099 Today
          </div>
        </div>
        <div class="card-top youtube">
          <div class="social-account">
           
            {/* icon */}
            @nathanf
          </div>
          <div class="social-data-monthly">
            <span class="data-number">8239</span>
            <span class="data-type">Followers</span>
          </div>
          <div class="data down">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
              <path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z" />
            </svg>
            144 Today
          </div>
        </div>
      </div>
    </section>
    <section class="main-section">
      <div class="container">
        <h2>Overview - Today</h2>
        <div class="card__grid">
          <div class="card-overview">
            <div class="title">
              Page Views
               {/* icon */}
            </div>
            <div class="number">
              87
              <div class="data up">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                  <path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" />
                </svg>
                3%
              </div>
            </div>
          </div>
          <div class="card-overview">
            <div class="title">
              Likes
               {/* icon */}
            </div>
            <div class="number">
              52
              <div class="data down">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                  <path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z" />
                </svg>
                2%
              </div>
            </div>
          </div>
          <div class="card-overview">
            <div class="title">
              Likes
               {/* icon */}
            </div>
            <div class="number">
              5462
              <div class="data up">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                  <path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" />
                </svg>
                2254%
              </div>
            </div>
          </div>
          <div class="card-overview">
            <div class="title">
              Profile Views
               {/* icon */}
            </div>
            <div class="number">
              52k
              <div class="data up">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                  <path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" />
                </svg>
                1375%
              </div>
            </div>
          </div>
          <div class="card-overview">
            <div class="title">
              Retweets
               {/* icon */}
            </div>
            <div class="number">
              117
              <div class="data up">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                  <path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" />
                </svg>
                303%
              </div>
            </div>
          </div>
          <div class="card-overview">
            <div class="title">
              Likes
               {/* icon */}
            </div>
            <div class="number">
              507
              <div class="data up">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                  <path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" />
                </svg>
                553%
              </div>
            </div>
          </div>
          <div class="card-overview">
            <div class="title">
              Likes
               {/* icon */}
            </div>
            <div class="number">
              107
              <div class="data down">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                  <path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z" />
                </svg>
                19%
              </div>
            </div>
          </div>
          <div class="card-overview">
            <div class="title">
              Total Views
               {/* icon */}
            </div>
            <div class="number">
              1407
              <div class="data down">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                  <path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z" />
                </svg>
                12%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <Container className="w-full p-4 bg-gray-50 md:w-2/3 md:p-8 md:min-content xl:w-7/12">
      <h2 className="text-base font-bold">30 Days Performance</h2>

      {/* First Row */}
      <Row className="flex justify-between mt-4 space-y-3 mb-8 flex-col md:flex-row md:space-x-4 md:space-y-0 md:mb-14">
        <Col md={4}>
          <Card className="p-5 bg-[#4F46BA] rounded-xl w-full views">
            <Card.Text className="text-base font-bold text-white opacity-30">VIEWS</Card.Text>
            <Card.Text className="text-base font-semibold text-white">7,482,120</Card.Text>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-5 bg-[#4F46BA] rounded-xl w-full follows">
            <Card.Text className="text-base font-bold text-white opacity-30">FOLLOWS</Card.Text>
            <Card.Text className="text-base font-semibold text-white">54,364</Card.Text>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-5 bg-[#4F46BA] rounded-xl w-full likes">
            <Card.Text className="text-base font-bold text-white opacity-30">LIKES</Card.Text>
            <Card.Text className="text-base font-semibold text-white">125,685</Card.Text>
          </Card>
        </Col>
      </Row>

      {/* Second Row */}
      <Row className="flex mb-8 flex-col items-center md:mb-14 xl:flex-row xl:items-start xl:space-x-4">
        <Col md={8}>
          <h2 className="text-base font-bold mb-4">Analytics</h2>
          <Card className="p-4 bg-white rounded-xl drop-shadow-md mb-4 xl:mb-10">
            <div className="d-flex justify-content-between items-center">
              <h3 className="text-sm font-bold mb-8 text-[#1B2767]" style={{ color: "#1B2767" }} >Daily Views</h3>
              <div className="d-flex items-center mb-4">
                <p className="text-sm mr-4">2021</p>
                 {/* icon */}
              </div>
            </div>
             {/* icon */}
          </Card>
          <Row className="flex flex-col space-y-4 mb-8 md:flex-row md:space-y-0 md:space-x-4 md:mb-14">
            <Col md={6}>
              <Card className="w-full p-4 bg-[#F2E9FF] rounded-xl drop-shadow-md h-1/2">
                <div className="flex justify-between mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1632277535515-73391d9a037b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                    alt=""
                    className="w-20 h-20 object-cover rounded"
                  />
                  {/* icon */}
                </div>
                <h3 className="text-[#393939] font-bold mb-1">Strange Cloud Formation</h3>
                <p className="text-sm text-[#7B7B7B]">By Mike Taylor</p>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="w-full p-4 bg-white rounded-xl drop-shadow-md">
                <div className="w-full h-20 mb-3">{/* icon */}</div>
                <h3 className="text-[#393939] font-semibold text-center">Scheduled Post</h3>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="w-full p-4 bg-white rounded-xl drop-shadow-md">
                <div className="w-full h-20 mb-3">{/* icon */}</div>
                <h3 className="text-[#393939] font-semibold text-center">Add New Post</h3>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <h2 className="text-base font-bold mb-4 text-[#242121]">Events Distribution</h2>
          <Card className="w-full p-4 bg-white rounded-xl drop-shadow-md">
            <h3 className="text-sm font-bold mb-4 text-[#1B2767] mb-8 text-center">
              Last 30 Days Performance
            </h3>
            {/* icon */}
            <h3 className="text-sm font-bold mb-4 text-center text-[#242121]">Events DISTRIBUTION</h3>
            <Row className="flex mb-4 justify-between">
              <Col>
                <div className="flex items-center">
                  {/* icon */}
                  <p className="text-sm font-semibold text-[#242121] ml-4">Likes</p>
                </div>
              </Col>
              <Col>
                <div className="flex items-center">
                  {/* icon */}
                  <p className="text-sm font-semibold text-[#242121] ml-4">Views</p>
                </div>
              </Col>
            </Row>
            <Row className="flex mb-4 justify-between">
              <Col>
                <div className="flex items-center">
                  {/* icon */}
                  <p className="text-sm font-semibold text-[#242121] ml-4">Follows</p>
                </div>
              </Col>
              <Col>
                <div className="flex items-center">
                  {/* icon */}
                  <p className="text-sm font-semibold text-[#242121] ml-4">Share</p>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Third Row */}
      <h2 className="text-base font-bold mb-4">Statistics</h2>
      <Row className="flex flex-col items-center space-y-4 xl:flex-row xl:space-y-0 xl:space-x-4">
        <Col md={6}>
          <Card className="w-full py-4 px-8 bg-white rounded-xl drop-shadow-md flex items-center justify-between">
            <div>
              <p className="text-xl text-[#393939] font-bold mb-4">Weekly Target</p>
              <p className="text-[#4D4A81] font-semibold">25% achieved</p>
            </div>
            <hr className="h-20 w-0.5 bg-[#F6F6FC]" />
            {/* icon */}
          </Card>
        </Col>
        <Col md={6}>
          <Card className="w-full py-4 px-8 bg-[#51459E] rounded-xl drop-shadow-md flex items-center justify-between">
            <div>
              <p className="text-xl text-white font-bold mb-4">Monthly Target</p>
              <p className="text-white font-semibold">50% achieved</p>
            </div>
            <hr className="h-20 w-0.5 bg-[#F6F6FC]" />
            {/* icon */}
          </Card>
        </Col>
      </Row>
    </Container>
        </div>
      </section>
      </DndProvider>
     
    </>
  );

  return <Header mainContainerContent={mainContainerContent} />;
};

export default AllInOne;

