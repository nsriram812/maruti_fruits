import React from 'react';
import {FooterOverlay, Newsletter} from '../../components';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';
import './Footer.css';
import {images} from '../../constants';

const Footer = () => (
  <div className="app__footer section__padding">
    {/*<FooterOverlay/>
    <Newsletter/>*/}
    <div className="app__footer-links" id="contact">
      <div className="app__footer-links_contacts">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans_white">Maruti Fruit Canning Industries</p>  
        <p className="p__opensans_white">Gajulapalli, Via Aragonda,</p> 
        <p className="p__opensans_white">Andhra Pradesh 517129, India </p>    
        <p className="p__opensans_white">+91-9866451769</p>    
        <p className="p__opensans_white">+91-9492759999</p>      
      </div>
      <div className="app__footer-links_logo">
        <img src={images.mango} alt="footer_logo"/>
        
       
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans_white">Monday-Friday:</p>    
        <p className="p__opensans_white">08:00 AM - 08:00 PM</p>    
        <p className="p__opensans_white">Saturday-Sunday:</p>  
        <p className="p__opensans_white">08:00 AM - 06:00 PM</p>     
      </div>
    </div>
    {/*<div className="footer__copyright">
      <p className="p__opensans_white">2021 . All Rights reserved.</p>
  </div>*/}
  </div>
);

export default Footer;
