
import React, { useState } from 'react';
import Header from '../components/Header';
import "../assets/css/FacebookDashboard.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendar, FaCog } from 'react-icons/fa';
import ConversionByAdGroup from '../components/GoogleAd/ConversionByAdGroup';
import CompaignsTable from '../components/GoogleAd/CompaignsTable';
import FollowersGrowth from '../components/InstagramDashboard/FollowersGrowth';
import ClicksByAdGroup from '../components/GoogleAd/ClicksByAdGroup';
import Table from 'react-bootstrap/Table';
import post1 from '../assets/images/post1.jpg';
import FollowersByCountry from '../components/InstagramDashboard/FollowersByCountry';
import { FollowersByLanguage } from '../components/InstagramDashboard/FollowersByLanguage';


const TwitterDashboard = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [activeTab, setActiveTab] = useState('both');
    const handleTabClick = (tab) => {
      setActiveTab(tab);
   };


   const mainContainerContent = (
    <section className="home facebook_home">
    <div className="text facebook_text">
      <h3>Tweet Performance Dashboard</h3>

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
        <div className='col-4 column_divs column_all'>
        <div className="row">
        <div class="col-xl-6 col-lg-6 mb-2">
          <div class="card cardss card-stats mb-4 mb-xl-0">
            <div class="card-body">
              <div class="row">
                <div class="col-8">
                 
                  <span class="h2 font-weight-bold mb-0 card-head">15K</span>
                  <h5 class="card-title text-uppercase text-muted mb-0 card_title">Followers</h5>
                </div>
                <div class="col-auto col-4">
                  <div class="icons icon-shape bg-danger text-white rounded-circle shadow">
                    <i class="fas fa-user"></i>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 mb-2">
          <div class="card cardss card-stats mb-4 mb-xl-0">
            <div class="card-body">
              <div class="row">
                <div class="col-8">
                 
                  <span class="h2 font-weight-bold mb-0 card-head">20K</span>
                  <h5 class="card-title text-uppercase text-muted mb-0 card_title">Views</h5>
                </div>
                <div class="col-auto col-4">
                  <div class="icons icon-shape bg-warning text-white rounded-circle shadow">
                    <i class="fas fa-eye"></i>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 mb-2">
          <div class="card cardss card-stats mb-4 mb-xl-0">
            <div class="card-body">
              <div class="row">
                <div class="col-8">
                 
                  <span class="h2 font-weight-bold mb-0 card-head">147</span>
                  <h5 class="card-title text-uppercase text-muted mb-0 card_title">Total Tweets</h5>
                </div>
                <div class="col-auto col-4">
                  <div class="icons icon-shape bg-warning text-white rounded-circle shadow">
                    <i class="fas fa-eye"></i>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 ">
          <div class="card cardss card-stats mb-4 mb-xl-0">
            <div class="card-body">
              <div class="row">
                <div class="col-8">
                 
                  <span class="h2 font-weight-bold mb-0 card-head">7K</span>
                  <h5 class="card-title text-uppercase text-muted mb-0 card_title">Clicks</h5>
                </div>
                <div class="col-auto col-4">
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
        <div className='col-4 px-2 column_all'>
        <div className="row linechart_row p-4 mx-2 table_row">
            <h2>Followers Growth</h2>
            <FollowersGrowth />
        </div>
       
        </div>
        <div className='col-4 column_divs column_all'>
        <div className="row">
        <div class="col-xl-6 col-lg-6 mb-2">
          <div class="card cardss card-stats mb-4 mb-xl-0">
            <div class="card-body">
              <div class="row">
                <div class="col-8">
                 
                  <span class="h2 font-weight-bold mb-0 card-head">1.5K</span>
                  <h5 class="card-title text-uppercase text-muted mb-0 card_title">Retweets</h5>
                </div>
                <div class="col-auto col-4">
                  <div class="icons icon-shape bg-danger text-white rounded-circle shadow">
                    <i class="fas fa-user"></i>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 mb-2">
          <div class="card cardss card-stats mb-4 mb-xl-0">
            <div class="card-body">
              <div class="row">
                <div class="col-8">
                 
                  <span class="h2 font-weight-bold mb-0 card-head">10K</span>
                  <h5 class="card-title text-uppercase text-muted mb-0 card_title">Likes</h5>
                </div>
                <div class="col-auto col-4">
                  <div class="icons icon-shape bg-warning text-white rounded-circle shadow">
                    <i class="fas fa-eye"></i>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 mb-2">
          <div class="card cardss card-stats mb-4 mb-xl-0">
            <div class="card-body">
              <div class="row">
                <div class="col-8">
                 
                  <span class="h2 font-weight-bold mb-0 card-head">2K</span>
                  <h5 class="card-title text-uppercase text-muted mb-0 card_title">Replies</h5>
                </div>
                <div class="col-auto col-4">
                  <div class="icons icon-shape bg-warning text-white rounded-circle shadow">
                    <i class="fas fa-eye"></i>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>

        <div class="col-xl-6 col-lg-6 mb-2">
          <div class="card cardss card-stats mb-4 mb-xl-0">
            <div class="card-body">
              <div class="row">
                <div class="col-8">
                 
                  <span class="h2 font-weight-bold mb-0 card-head">5.6%</span>
                  <h5 class="card-title text-uppercase text-muted mb-0 card_title">Engagement Rate</h5>
                </div>
                <div class="col-auto col-4">
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
      <div className='main_container pt-4 d-flex'>
        <div className='col-4 column_divs column_all '>
        <div className='row linechart_row p-2 mx-0 instagram_column'>
        <h2>Top Performing Tweets</h2>
        <div className='row post_containerr display-flex justify-content-between post_perform_container'>
          
          <div className='col-6 post_div'>
           <div className='post_con p-3 text_left'>
           <h6>Exciting News:</h6>
            <div className='perform d-flex flex-column'>
            <div className='icon_number text-center mt-2 d-flex'>
            <span className='mx-2'>324</span>
            <span>Likes</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>42</span>
            <span>Retweets</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>12</span>
            <span>Replies</span>
            </div>
            </div>
           </div>
          </div>
          <div className='col-6 post_div'>
           <div className='post_con p-3 text_left'>
           <h6>Exciting News:</h6>
            <div className='perform d-flex flex-column'>
            <div className='icon_number text-center mt-2 d-flex'>
            <span className='mx-2'>324</span>
            <span>Likes</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>42</span>
            <span>Retweets</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>12</span>
            <span>Replies</span>
            </div>
            </div>
           </div>
          </div>
          <div className='col-6 post_div'>
           <div className='post_con p-3 text_left'>
           <h6>Exciting News:</h6>
            <div className='perform d-flex flex-column'>
            <div className='icon_number text-center mt-2 d-flex'>
            <span className='mx-2'>324</span>
            <span>Likes</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>42</span>
            <span>Retweets</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>12</span>
            <span>Replies</span>
            </div>
            </div>
           </div>
          </div>

          <div className='col-6 post_div'>
           <div className='post_con p-3 text_left'>
           <h6>Exciting News:</h6>
            <div className='perform d-flex flex-column'>
            <div className='icon_number text-center mt-2 d-flex'>
            <span className='mx-2'>324</span>
            <span>Likes</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>42</span>
            <span>Retweets</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>12</span>
            <span>Replies</span>
            </div>
            </div>
           </div>
          </div>

          <div className='col-6 post_div'>
           <div className='post_con p-3 text_left'>
           <h6>Exciting News:</h6>
            <div className='perform d-flex flex-column'>
            <div className='icon_number text-center mt-2 d-flex'>
            <span className='mx-2'>324</span>
            <span>Likes</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>42</span>
            <span>Retweets</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>12</span>
            <span>Replies</span>
            </div>
            </div>
           </div>
          </div>
          <div className='col-6 post_div'>
           <div className='post_con p-3 text_left'>
           <h6>Exciting News:</h6>
            <div className='perform d-flex flex-column'>
            <div className='icon_number text-center mt-2 d-flex'>
            <span className='mx-2'>324</span>
            <span>Likes</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>42</span>
            <span>Retweets</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>12</span>
            <span>Replies</span>
            </div>
            </div>
           </div>
          </div>
          <div className='col-6 post_div'>
           <div className='post_con p-3 text_left'>
           <h6>Exciting News:</h6>
            <div className='perform d-flex flex-column'>
            <div className='icon_number text-center mt-2 d-flex'>
            <span className='mx-2'>324</span>
            <span>Likes</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>42</span>
            <span>Retweets</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>12</span>
            <span>Replies</span>
            </div>
            </div>
           </div>
          </div>

          <div className='col-6 post_div'>
           <div className='post_con p-3 text_left'>
           <h6>Exciting News:</h6>
            <div className='perform d-flex flex-column'>
            <div className='icon_number text-center mt-2 d-flex'>
            <span className='mx-2'>324</span>
            <span>Likes</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>42</span>
            <span>Retweets</span>
            </div>
            <div className='icon_number text-center mt-2 d-flex '>
            <span className='mx-2'>12</span>
            <span>Replies</span>
            </div>
            </div>
           </div>
          </div>
        </div>
        </div>
       
        </div>
        <div className='col-4 px-2 column_all '>
      
        <div className="row linechart_row p-4 mx-2 instagram_column">
            <FollowersByCountry />
        </div>
       
        </div>

        <div className='col-4 px-2 column_all '>
      
      <div className="row linechart_row p-4 mx-2 instagram_column">
          <FollowersByLanguage />
      </div>
     
      </div>
       
      </div>

      <div className='main_container pt-4 d-flex'>
        <div className='col-4 column_divs column_all'>
        <div className='row linechart_row p-2 mx-0 instagram_column'>
        <h2>Content Type Breakdown</h2>
        <div className='row post_containerr display-flex justify-content-between'>
          
          <div className='col-4 post_div'>
           <div className='post_con'>
           <div className='icon_number counts text-center mt-3 d-flex flex-column'>
            <p>Photo</p>
            <span>25</span>
            </div>
            <div className='icon_number text-center mt-3 d-flex flex-column'>
            <span>Percentage:</span>
            <span>1200</span>
            </div>
          
           </div>
          </div>
          <div className='col-4 post_div'>
           <div className='post_con'>
           <div className='icon_number counts text-center mt-3 d-flex flex-column'>
            <p>Video</p>
            <span>15</span>
            </div>
            <div className='icon_number text-center mt-3 d-flex flex-column'>
            <span>Percentage:</span>
            <span>1200</span>
            </div>
           
           </div>
          </div>
          <div className='col-4 post_div'>
           <div className='post_con'>
           <div className='icon_number counts text-center mt-3 d-flex flex-column'>
            <p>Story</p>
            <span>10</span>
            </div>
            <div className='icon_number text-center mt-3 d-flex flex-column'>
            <span>Percentage:</span>
            <span>1200</span>
            </div>
           
           </div>
          </div>
        </div>
        </div>
       
        </div>
        <div className='col-4 px-2 column_all'>
      
        <div className="row linechart_row p-4 mx-2">
        <h2>Clicks by location</h2>
        <Table striped bordered hover>
  
  <tbody>
    <tr>
      <td>India</td>
      <td>500</td>
    </tr>
    <tr>
      <td>Australia</td>
      <td>600</td>
    </tr>
    <tr>
      <td>UK</td>
      <td>700</td>
    </tr>
    <tr>
      <td>Canada</td>
      <td>400</td>
    </tr>
    
  </tbody>
</Table>
        </div>
       
        </div>

        <div className='col-4 column_divs column_all'>
        <div className="row">
        <div class="col-xl-6 col-lg-6 mb-2">
          <div class="card cardss card-stats mb-4 mb-xl-0">
            <div class="card-body">
              <div class="row">
                <div class="col-8">
                 
                  <span class="h2 font-weight-bold mb-0 card-head">45</span>
                  <h5 class="card-title text-uppercase text-muted mb-0 card_title">Negative Feedbacks</h5>
                </div>
                <div class="col-auto col-4">
                  <div class="icons icon-shape bg-danger text-white rounded-circle shadow">
                    <i class="fas fa-user"></i>
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

export default TwitterDashboard;


