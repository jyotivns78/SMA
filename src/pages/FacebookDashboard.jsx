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

const FacebookDashboard = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [activeTab, setActiveTab] = useState('both');
    const handleTabClick = (tab) => {
      setActiveTab(tab);
   };


    const mainContainerContent = (
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
                      className="form-control date_input"
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
                      className="form-control date_input"
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
        </div>
      </section>
      );

      return <Header mainContainerContent={mainContainerContent} />;
};

export default FacebookDashboard;
