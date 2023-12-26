// FacebookDashboard.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import { HorizontalBar } from '../components/HorizontalBar';
import "../assets/css/FacebookDashboard.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendar, FaCog } from 'react-icons/fa';
import LineChart from '../components/LineChart';
import FollowersGrowthChart from '../components/FollowersGrowthChart';
import FollowersByCountry from '../components/FollowersByCountry';
import "../assets/css/post.css";

const Testing = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [activeTab, setActiveTab] = useState('both');
    const handleTabClick = (tab) => {
      setActiveTab(tab);
   };


    const mainContainerContent = (
      <>
    
      <section className="home facebook_home">
        <div className="text facebook_text">
          <h3>Facebook Dashboard</h3>

          <div className='facebook_contain d-flex justify-content-between'>
            <div className='date_picker_div'>
              <form id="form" name="form" className="form-inline">
                <div className="form-group d-flex">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text icon_group">
                        <FaCalendar className='calendar_icon' />
                      </div>
                    </div>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      startDate={startDate}
                      endDate={endDate}
                      selectsStart
                      className="form-control"
                      placeholderText="Start Date"
                    />
                  </div>
                  &nbsp;
                  <span className="date-to">To</span>
                  &nbsp;
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text icon_group">
                        <FaCalendar className='calendar_icon' />
                      </div>
                    </div>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      startDate={startDate}
                      endDate={endDate}
                      selectsEnd
                      className="form-control"
                      placeholderText="End Date"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className='filter_div'>
            <div class="tabs_wrap">
            <ul>
                  <li
                    data-tabs="today"
                    className={activeTab === 'today' ? 'active' : ''}
                    onClick={() => handleTabClick('today')}
                  >
                    Today
                  </li>
                  <li
                    data-tabs="yesterday"
                    className={activeTab === 'yesterday' ? 'active' : ''}
                    onClick={() => handleTabClick('yesterday')}
                  >
                    Yesterday
                  </li>
                  <li
                    data-tabs="week"
                    className={activeTab === 'week' ? 'active' : ''}
                    onClick={() => handleTabClick('week')}
                  >
                    Week
                  </li>
                  <li
                    data-tabs="month"
                    className={activeTab === 'month' ? 'active' : ''}
                    onClick={() => handleTabClick('month')}
                  >
                    Month
                  </li>
                  <li
                    data-tabs="year"
                    className={activeTab === 'year' ? 'active' : ''}
                    onClick={() => handleTabClick('year')}
                  >
                    Year
                  </li>
                </ul>
  </div>
            </div>

            <div className='setup_div'>
              <button className="setup-button">
                <FaCog /> Setup
              </button>
            </div>
          </div>

          <div className='main_container pt-4 d-flex'>
            <div className='col-5 column_divs column_all'>
            <div className="row">
            <div class="col-xl-6 col-lg-6">
              <div class="card cardss card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                     
                      <span class="h2 font-weight-bold mb-0 card-head">15K</span>
                      <h5 class="card-title text-uppercase text-muted mb-0">Total Followers</h5>
                    </div>
                    <div class="col-auto">
                      <div class="icons icon-shape bg-danger text-white rounded-circle shadow">
                        <i class="fas fa-user"></i>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="card cardss card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                     
                      <span class="h2 font-weight-bold mb-0 card-head">20K</span>
                      <h5 class="card-title text-uppercase text-muted mb-0">Total Views</h5>
                    </div>
                    <div class="col-auto">
                      <div class="icons icon-shape bg-warning text-white rounded-circle shadow">
                        <i class="fas fa-eye"></i>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
           
            </div>
            <div className='row linechart_row p-4 mx-0 mt-2'>
          <HorizontalBar />
            </div>
            </div>
            <div className='col-5 px-2 column_all'>
            <div className="row linechart_row p-4 mx-2">
                <LineChart />
            </div>
            <div className="row linechart_row p-4 mx-2">
                <FollowersGrowthChart />
            </div>
            <div className="row linechart_row p-4 mx-2">
                <FollowersByCountry />
            </div>
            </div>
            <div className='col-2 column_all'>
            <div className="row d-flex flex-column">
            <div class="col-xl-12 col-lg-6 mb-2">
              <div class="card cardss card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                     
                      <span class="h2 font-weight-bold mb-0 card-head">1.5K</span>
                      <h5 class="card-title text-uppercase text-muted mb-0">Shares</h5>
                    </div>
                    <div class="col-auto">
                      <div class="icons icon-shape bg-danger text-white rounded-circle shadow">
                        <i class="fas fa-share"></i>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div class="col-xl-12 col-lg-6 mb-2">
              <div class="card cardss card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                     
                      <span class="h2 font-weight-bold mb-0 card-head">10K</span>
                      <h5 class="card-title text-uppercase text-muted mb-0">Likes</h5>
                    </div>
                    <div class="col-auto">
                      <div class="icons icon-shape bg-warning text-white rounded-circle shadow">
                        <i class="fas fa-heart"></i>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>

            <div class="col-xl-12 col-lg-6 mb-2">
              <div class="card cardss card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                     
                      <span class="h2 font-weight-bold mb-0 card-head">2K</span>
                      <h5 class="card-title text-uppercase text-muted mb-0">Comments</h5>
                    </div>
                    <div class="col-auto">
                      <div class="icons icon-shape bg-danger text-white rounded-circle shadow">
                        <i class="fas fa-comment"></i>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div class="col-xl-12 col-lg-6 mb-2">
              <div class="card cardss card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                     
                      <span class="h2 font-weight-bold mb-0 card-head">45</span>
                      <h5 class="card-title text-uppercase text-muted mb-0">Negative Feedback</h5>
                    </div>
                    <div class="col-auto">
                      <div class="icons icon-shape bg-warning text-white rounded-circle shadow">
                        <i class="fas fa-eye"></i>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
           
            </div>
            </div>

            
          </div>

          <div class="container profile">
          <div class="row">
        <div class="col-md-6">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <a href="#"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" style={{ width: "50px" }} width="50" class="rounded-circle" /></a>
                        <div class="flex-fill ps-2">
                            <div class="fw-bold"><a href="#" class="text-decoration-none">Clyde Stanley</a> at <a href="#" class="text-decoration-none">South Lake Tahoe, California</a></div>
                            <div class="small text-body text-opacity-50">March 16</div>
                        </div>
                    </div>

                    <p>Best vacation of 2023</p>
                    <div class="profile-img-list">
                        <div class="profile-img-list-item main">
                            <a href="#" data-lity="" class="profile-img-list-link">
                                <span class="profile-img-content" style={{ backgroundImage: "url(https://bootdey.com/img/Content/avatar/avatar1.png)" }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item">
                            <a href="#" data-lity="" class="profile-img-list-link">
                                <span class="profile-img-content" style={{ backgroundImage: "url(https://bootdey.com/img/Content/avatar/avatar2.png)" }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item">
                            <a href="#" data-lity="" class="profile-img-list-link">
                                <span class="profile-img-content" style={{ backgroundImage: "url(https://bootdey.com/img/Content/avatar/avatar3.png)" }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item">
                            <a href="#" data-lity="" class="profile-img-list-link">
                                <span class="profile-img-content" style={{ backgroundImage: "url(https://bootdey.com/img/Content/avatar/avatar5.png)" }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item with-number">
                            <a href="#" data-lity="" class="profile-img-list-link">
                                <span class="profile-img-content" style={{ backgroundImage: "url(https://bootdey.com/img/Content/avatar/avatar4.png)" }}></span>
                                <div class="profile-img-number">+12</div>
                            </a>
                        </div>
                    </div>
                    <hr class="mb-1 opacity-1" />

                    <div class="row text-center fw-bold">
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="far fa-thumbs-up me-1 d-block d-sm-inline"></i> Likes </a>
                        </div>
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="far fa-comment me-1 d-block d-sm-inline"></i> Comment </a>
                        </div>
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="fa fa-share me-1 d-block d-sm-inline"></i> Share </a>
                        </div>
                    </div>
                    <hr class="mb-3 mt-1 opacity-1" />
                    <div class="d-flex align-items-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" style={{ width: "35px" }} width="35" class="rounded-circle" />
                        <div class="flex-fill ps-2">
                            <div class="position-relative d-flex align-items-center">
                                <input type="text" class="form-control rounded-pill bg-white bg-opacity-15" style={{ paddingRight: "120px" }}  placeholder="Write a comment..." />
                                <div class="position-absolute end-0 text-center">
                                    <a href="#" class="text-body text-opacity-50 me-2"><i class="fa fa-smile"></i></a>
                                    <a href="#" class="text-body text-opacity-50 me-2"><i class="fa fa-camera"></i></a>
                                    <a href="#" class="text-body text-opacity-50 me-2"><i class="fa fa-video"></i></a>
                                    <a href="#" class="text-body text-opacity-50 me-3"><i class="fa fa-paw"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <a href="#"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" style={{ width: "50px" }} width="50" class="rounded-circle" /></a>
                        <div class="flex-fill ps-2">
                            <div class="fw-bold"><a href="#" class="text-decoration-none">Clyde Stanley</a> at <a href="#" class="text-decoration-none">South Lake Tahoe, California</a></div>
                            <div class="small text-body text-opacity-50">March 16</div>
                        </div>
                    </div>

                    <p>Best vacation of 2023</p>
                    <div class="profile-img-list">
                        <div class="profile-img-list-item main">
                            <a href="#" data-lity="" class="profile-img-list-link">
                                <span class="profile-img-content" style={{ backgroundImage: "url(https://bootdey.com/img/Content/avatar/avatar1.png)" }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item">
                            <a href="#" data-lity="" class="profile-img-list-link">
                                <span class="profile-img-content" style={{ backgroundImage: "url(https://bootdey.com/img/Content/avatar/avatar2.png)" }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item">
                            <a href="#" data-lity="" class="profile-img-list-link">
                                <span class="profile-img-content" style={{ backgroundImage: "url(https://bootdey.com/img/Content/avatar/avatar3.png)" }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item">
                            <a href="#" data-lity="" class="profile-img-list-link">
                                <span class="profile-img-content" style={{ backgroundImage: "url(https://bootdey.com/img/Content/avatar/avatar5.png)" }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item with-number">
                            <a href="#" data-lity="" class="profile-img-list-link">
                                <span class="profile-img-content" style={{ backgroundImage: "url(https://bootdey.com/img/Content/avatar/avatar4.png)" }}></span>
                                <div class="profile-img-number">+12</div>
                            </a>
                        </div>
                    </div>
                    <hr class="mb-1 opacity-1" />

                    <div class="row text-center fw-bold">
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="far fa-thumbs-up me-1 d-block d-sm-inline"></i> Likes </a>
                        </div>
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="far fa-comment me-1 d-block d-sm-inline"></i> Comment </a>
                        </div>
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="fa fa-share me-1 d-block d-sm-inline"></i> Share </a>
                        </div>
                    </div>
                    <hr class="mb-3 mt-1 opacity-1" />
                   
                </div>
            </div>
        </div>
    </div>
          </div>

      
        </div>
      </section>
      
      </>
      
      );

      return <Header mainContainerContent={mainContainerContent} />;
};

export default Testing;
