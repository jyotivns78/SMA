import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { FaFacebook, FaInstagram, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';


const SocialMediaLinks = () => {
  //   const userId = useSelector((state) => state.auth.id);
  // const userToken = useSelector((state) => state.auth.token);

  // const [socialLinks, setSocialLinks] = useState({
  //   facebook: '',
  //   instagram: '',
  //   googleAds: '',
  //   linkedin: '',
  //   twitter: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setSocialLinks({ ...socialLinks, [name]: value });
  // };

  // const handleSubmit = async () => {
  //   console.log('Token:', userToken);

  //   if (userToken) {
  //     try {
  //       const response = await axios.patch(
  //         `https://saltinsocial.onrender.com/user/profile/socialLink/${userId}`,
  //         {
  //           Links: [
  //             {
  //               type: 'facebook',
  //               link: socialLinks.facebook,
  //             },
  //             {
  //               type: 'instagram',
  //               link: socialLinks.instagram,
  //             },
  //              {
  //               type: 'googleAds',
  //               link: socialLinks.googleAds,
  //             },
  //              {
  //               type: 'linkedin',
  //               link: socialLinks.linkedin,
  //             },
  //              {
  //               type: 'twitter',
  //               link: socialLinks.twitter,
  //             },
  //           ],
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${userToken}`,
  //           },
  //         }
  //       );

  //       console.log('Social media links saved successfully:', response.data);

  //       const linksData = response.data.message.Links;
  //       if (linksData) {
  //         setSocialLinks(linksData);
  //       } else {
  //         console.error('Links data is missing in the server response');
  //       }
  //     } catch (error) {
  //       console.error('Error saving social media links:', error.response.data);
  //     }
  //   } else {
  //     console.error('User token is undefined');
  //   }
  // };


  const userId = useSelector((state) => state.auth.id);
  const userToken = useSelector((state) => state.auth.token);

  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    instagram: '',
    googleAds: '',
    linkedin: '',
    twitter: '',
  });

  const [serverLinks, setServerLinks] = useState([]);

  useEffect(() => {
    if (serverLinks.length > 0) {
      // Update the socialLinks state when serverLinks change
      setSocialLinks({
        facebook: serverLinks.find(link => link.type === 'facebook')?.link || '',
        instagram: serverLinks.find(link => link.type === 'instagram')?.link || '',
        googleAds: serverLinks.find(link => link.type === 'googleAds')?.link || '',
        linkedin: serverLinks.find(link => link.type === 'linkedin')?.link || '',
        twitter: serverLinks.find(link => link.type === 'twitter')?.link || '',
      });
    }
  }, [serverLinks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks({ ...socialLinks, [name]: value });
  };

  const handleSubmit = async () => {
    console.log('Token:', userToken);

    if (userToken) {
      try {
        const response = await axios.patch(
          `https://saltinsocial.onrender.com/user/profile/socialLink/${userId}`,
          {
            Links: [
              { type: 'facebook', link: socialLinks.facebook },
              { type: 'instagram', link: socialLinks.instagram },
              { type: 'googleAds', link: socialLinks.googleAds },
              { type: 'linkedin', link: socialLinks.linkedin },
              { type: 'twitter', link: socialLinks.twitter },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        console.log('Social media links saved successfully:', response.data);

        const linksData = response.data.message.Links;

        if (Array.isArray(linksData)) {
          // Update the serverLinks state
          setServerLinks(linksData);
        } else {
          console.error('Links data is missing or empty in the server response');
        }
      } catch (error) {
        console.error('Error saving social media links:', error.response.data);
      }
    } else {
      console.error('User token is undefined');
    }
  };

  return (
    <>
      <div className="col-xl-12">
        <div className="card mb-4">
          <div className="card-header">Social Media Links</div>

          <div className="card-body">
            <form>
              <div className="row gx-3 mb-3 mt-3">
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputFacebook">
                    <FaFacebook className="icon" /> Facebook Profile Link
                  </label>
                  <input
                    className="form-control custom-input"
                    id="inputFacebook"
                    type="text"
                    placeholder="Enter Facebook Profile Link"
                    name="facebook"
                    value={socialLinks.facebook}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputInstagram">
                    <FaInstagram className="icon" /> Instagram Profile Link
                  </label>
                  <input
                    className="form-control custom-input"
                    id="inputInstagram"
                    type="text"
                    placeholder="Enter Instagram Profile Link"
                    name="instagram"
                    value={socialLinks.instagram}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputGoogleAds">
                    <FaGoogle className="icon" /> Google Ads Profile Link
                  </label>
                  <input
                    className="form-control custom-input"
                    id="inputGoogleAds"
                    type="text"
                    placeholder="Enter Google Ads Profile Link"
                    name="googleAds"
                    value={socialLinks.googleAds}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputLinkedIn">
                    <FaLinkedin className="icon" /> LinkedIn Profile Link
                  </label>
                  <input
                    className="form-control custom-input"
                    id="inputLinkedIn"
                    type="text"
                    placeholder="Enter LinkedIn Profile Link"
                    name="linkedin"
                    value={socialLinks.linkedin}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <label className="small mb-1" htmlFor="inputTwitter">
                  <FaTwitter className="icon" /> Twitter Profile Link
                </label>
                <input
                  className="form-control custom-input"
                  id="inputTwitter"
                  type="text"
                  placeholder="Enter Twitter Profile Link"
                  name="twitter"
                  value={socialLinks.twitter}
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-primary custom-btn" type="button" onClick={handleSubmit}>
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaLinks;
