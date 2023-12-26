import React from 'react';
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const ProfileInformation = () => {
    const userId = useSelector((state) => state.auth.id);
    const token = useSelector((state) => state.auth.token);


  return (
   <>
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

     <div className="col-md-6">
         <label className="small mb-1" htmlFor="inputFirstName">
           <FaUser className="icon" /> User Id
         </label>
         <p>{userId}</p>
      
       </div>

       <div className="col-md-6">
         <label className="small mb-1" htmlFor="inputFirstName">
           <FaUser className="icon" /> Token
         </label>
         <p>{token}</p>
      
       </div>

     
     

     <button className="btn btn-primary custom-btn" type="button">
       Save changes
     </button>
   </form>
                           </div>
                       </div>
                   </div>
   </>
  )
}

export default ProfileInformation