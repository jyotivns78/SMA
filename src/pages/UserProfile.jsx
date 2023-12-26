import React, { useState } from 'react';
import "../assets/css/Profile.css";
import Header from '../components/Header';
import "../assets/css/UserProfile.css";
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';

const UserProfile = () => {

    const [activeTab, setActiveTab] = useState('profile');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    const renderTabContent = () => {
        switch (activeTab) {
           
            case 'security':
                return (
                    <>
                    <div class="row">
                    <div class="col-lg-8">
                        <div class="card mb-4">
                            <div class="card-header">Change Password</div>
                            <div class="card-body">
                                <form>
                                    <div class="mb-3">
                                        <label class="small mb-1" for="currentPassword">Current Password</label>
                                        <input class="form-control" id="currentPassword" type="password" placeholder="Enter current password" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="small mb-1" for="newPassword">New Password</label>
                                        <input class="form-control" id="newPassword" type="password" placeholder="Enter new password" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="small mb-1" for="confirmPassword">Confirm Password</label>
                                        <input class="form-control" id="confirmPassword" type="password" placeholder="Confirm new password" />
                                    </div>
                                    <button class="btn btn-primary" type="button">Save</button>
                                </form>
                            </div>
                        </div>
                      
                    </div>
                    <div class="col-lg-4">
                      
                        <div class="card mb-4">
                            <div class="card-header">Delete Account</div>
                            <div class="card-body">
                                <p>Deleting your account is a permanent action and cannot be undone. If you are sure you want to delete your account, select the button below.</p>
                                <button class="btn btn-danger-soft text-danger" type="button">I understand, delete my account</button>
                            </div>
                        </div>
                    </div>
                </div>
                </>
                );
            case 'notifications':
                return (
                    <div>
                        {/* <h2 className="mb-3">Notification Preferences</h2>
                       
                        <form>
                           
                            <button className="btn btn-primary" type="button">Save Notification Preferences</button>
                        </form> */}
                    </div>
                );
            default:
                return (
                    <div class="row">
                   
                    <div class="col-xl-12">
                        <div class="card mb-4">
                            <div class="card-header">Account Details</div>
                            <div class="card-body">
                            <form>
      <div className="row gx-3 mb-3">
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputFirstName">
            <FaUser className="icon" /> First name
          </label>
          <input className="form-control custom-input" id="inputFirstName" type="text" placeholder="Enter your first name" value="" />
         {/* <p>Jyoti</p> */}
        </div>
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputLastName">
            <FaUser className="icon" /> Last name
          </label>
          <input className="form-control custom-input" id="inputLastName" type="text" placeholder="Enter your last name" value="" />
        </div>
      </div>

      <div className="row gx-3 mb-3">
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputOrgName">
            <FaBuilding className="icon" /> Company name
          </label>
          <input className="form-control custom-input" id="inputOrgName" type="text" placeholder="Enter your company name" value="" />
        </div>
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputEmailAddress">
            <FaEnvelope className="icon" /> Company Email
          </label>
          <input className="form-control custom-input" id="inputEmailAddress" type="email" placeholder="Enter your company email address" value="" />
        </div>
      </div>

      <div className="row gx-3 mb-3">
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputPhone">
            <FaPhone className="icon" /> Phone number
          </label>
          <input className="form-control custom-input" id="inputPhone" type="tel" placeholder="Enter your phone number" value="" />
        </div>
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputEmailAddress">
            <FaEnvelope className="icon" /> Email address
          </label>
          <input className="form-control custom-input" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="" />
        </div>
      </div>

      <div className="card-header">Social Media Links</div>

      <div className="row gx-3 mb-3 mt-3">
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputFacebook">
            <FaFacebook className="icon" /> Facebook Profile Link
          </label>
          <input className="form-control custom-input" id="inputFacebook" type="text" placeholder="Enter Facebook Profile Link" value="" />
        </div>
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputInstagram">
            <FaInstagram className="icon" /> Instagram Profile Link
          </label>
          <input className="form-control custom-input" id="inputInstagram" type="text" placeholder="Enter Instagram Profile Link" value="" />
        </div>
      </div>

      <div className="row gx-3 mb-3">
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputGoogleAds">
            <FaGoogle className="icon" /> Google Ads Profile Link
          </label>
          <input className="form-control custom-input" id="inputGoogleAds" type="text" placeholder="Enter Google Ads Profile Link" value="" />
        </div>
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputLinkedIn">
            <FaLinkedin className="icon" /> LinkedIn Profile Link
          </label>
          <input className="form-control custom-input" id="inputLinkedIn" type="text" placeholder="Enter LinkedIn Profile Link" value="" />
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <label className="small mb-1" htmlFor="inputTwitter">
          <FaTwitter className="icon" /> Twitter Profile Link
        </label>
        <input className="form-control custom-input" id="inputTwitter" type="text" placeholder="Enter Twitter Profile Link" value="" />
      </div>

      <button className="btn btn-primary custom-btn" type="button">
        Save changes
      </button>
    </form>
                            </div>
                        </div>
                    </div>
                </div>
                );
        }
    };

    const mainContainerContent = (
        <div>
        <h1 className='text-center pt-5'>Profile</h1>
        <div class="container-xl px-4 mt-4">
        <nav className="nav nav-borders">
                    <a className={`nav-link ${activeTab === 'profile' && 'active'}`} onClick={() => handleTabClick('profile')}>Profile</a>
                    {/* <a className={`nav-link ${activeTab === 'notifications' && 'active'}`} onClick={() => handleTabClick('notifications')}>Social Media Links</a> */}
                    {/* <a className={`nav-link ${activeTab === 'billing' && 'active'}`} onClick={() => handleTabClick('billing')}>Billing</a> */}
                    <a className={`nav-link ${activeTab === 'security' && 'active'}`} onClick={() => handleTabClick('security')}>Security</a>
                  
                </nav>
    <hr class="mt-0 mb-4" />

    {renderTabContent()}

   
</div>
      </div>
    );

  return (
  <>
  <Header mainContainerContent={mainContainerContent} />;
  </>

  )
}

export default UserProfile;