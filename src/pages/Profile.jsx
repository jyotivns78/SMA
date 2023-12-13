import React from 'react';
import "../assets/css/Profile.css";
import Header from '../components/Header';

const Profile = () => {

    const mainContainerContent = (
        <div>
        <h1 className='text-center pt-5'>Profile</h1>
        <div class="contact-form-wrapper d-flex justify-content-center">
          
          <form action="#" class="contact-form">
          
            <div className='d-flex'>
            <div>
              <label>First Name<span>*</span></label>
              <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="First Name" required />
            </div>
            <div>
            <label>Last Name<span>*</span></label>
              <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Last Name" required />
            </div>
            </div>
            <div>
            <label>Email Address<span>*</span></label>
              <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required />
            </div>
            <div>
            <label>Phone Number<span>*</span></label>
              <input type="phone" class="form-control rounded border-white mb-3 form-input" placeholder="Phone Number" required />
            </div>
            <div>
            <label>Password<span>*</span></label>
              <input type="password" class="form-control rounded border-white mb-3 form-input" placeholder="Password" required />
            </div>
            <div class="submit-button-wrapper">
              <input type="submit" value="Update" />
            </div>
          </form>
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