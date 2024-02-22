import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus flex__center" id="about">
   {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter"/>
    </div>*/}
    <div className="app__aboutus-content flex__center ">
      <div className="app__aboutus-content_about flex__center">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.greenleaf} alt="about_spoon" className="greenleaf"/>
        <p className="p__opensans"> We are located in the Chittoor district of South India, approximately 180 KM from the port of Chennai with convenient access for exporting our high-quality products. Through rigorous fruit processing operations, stringent quality control measures, adherence to agreed specifications, and efficient transportation, we ensure consistent quality and have experienced significant growth in both domestic and international markets. Today, we are widely recognized as a trusted and esteemed brand for Mango fruit pulp.</p>
       {/* <button type="button" className="custom__button">Know More</button>*/}
      </div>

      <div className="app__aboutus-content_knife">
        <img src={images.greentree} alt="about_tree"/>
      </div>

      <div className="app__aboutus-content_history flex__center">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.greenleaf} alt="about_spoon" className="greenleaf"/>
        <p className="p__opensans">Established in 1991 by late Sri S Subramanyam Naidu, Maruti Industries has steadily evolved and grown over the years. We take great pride in the accomplishments we have achieved under the guidance of our proprietor late Dr. S. Ananda Naidu and Managing Director, Mr. S. Lokeswar Naidu. Along the way, we expanded our operations and took over Poorna Processed Foods, located in Eaguva Thadakara, Andhra Pradesh, India, gradually strengthening our presence in the industry.</p>
         {/* <button type="button" className="custom__button">Know More</button>*/}
      </div>


    </div>

  </div>
);

export default AboutUs;
