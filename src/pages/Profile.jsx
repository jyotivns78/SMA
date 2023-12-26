import React from 'react';
import "../assets/css/Profile.css";
import Header from '../components/Header';
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SocialMediaLinks from './profile_forms/SocialMediaLinks';
import ProfileInformation from './profile_forms/ProfileInformation';

const Profile = () => {

    const mainContainerContent = (
        <div>
        <h1 className='text-center pt-5'>Profile</h1>
      
  <div class="container">



<div class="row g-3">
  <div class="col-md-4 d-none d-md-block">
    <div class="card tab_card">
      <div class="card-body">
        <ul class="nav flex-column nav-pills nav-gap-y-1">
          <li class="nav-item">
            <a href="#profile" data-bs-toggle="tab" class="nav-link has-icon nav-link-faded active">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user me-2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>Profile Information
            </a>
          </li>
          <li class="nav-item">
            <a href="#social_link" data-bs-toggle="tab" class="nav-link has-icon nav-link-faded">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings me-2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>Social Account Links
            </a>
          </li>
          <li class="nav-item">
            <a href="#account" data-bs-toggle="tab" class="nav-link has-icon nav-link-faded">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings me-2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>Account Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-md-8">
 

        <div class="card tab_cards">
          <div class="card-header border-bottom mb-3 d-flex d-md-none">
            <ul class="nav nav-tabs card-header-tabs nav-gap-x-1" role="tablist">
              <li class="nav-item">
                <a href="#profile" data-bs-toggle="tab" class="nav-link has-icon active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div class="card-body tab-content main_tab_contain">
          
            
              <div class="row tab-pane active" id="profile">
                   <ProfileInformation />
                
               </div>

               <div class="tab-pane" id="social_link">
               <SocialMediaLinks />
</div>
           

            <div class="tab-pane" id="account">
  <h6>ACCOUNT SETTINGS</h6>
  <hr />
  <form>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" class="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter your username" value="kennethvaldez" />
      <small id="usernameHelp" class="form-text text-muted">After changing your username, your old username becomes available for anyone else to claim.</small>
    </div>
    <hr />
    <div class="form-group">
      <label class="d-block text-danger">Delete Account</label>
      <p class="text-muted font-size-sm">Once you delete your account, there is no going back. Please be certain.</p>
    </div>
    <button class="btn btn-danger" type="button">Delete Account</button>
  </form>
</div>

          </div>
        </div>
      </div>

</div>
</div>
      </div>
    );

  return (
  <>
  <Header mainContainerContent={mainContainerContent} />;
  </>

  )
}

export default Profile;