import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdClose} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';
import { SubHeading } from '../../components';

const Navbar = () => {
  const[toggleMenu,setToggleMenu] = useState(false);
  return(
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.mango} alt="app logo"/>
      <SubHeading title="Maruti Fruit Canning Industries"/>
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans_white"><a href="#home">Home</a></li>
      <li className="p__opensans_white"><a href="#about">About</a></li>
      <li className="p__opensans_white"><a href="#menu">Products</a></li>
      <li className="p__opensans_white"><a href="#awards">Quality</a></li>
      <li className="p__opensans_white"><a href="#gallery">Gallery</a></li>
      <li className="p__opensans_white"><a href="#contact">Contact Us</a></li>
    </ul>
    {/*<div className="app__navbar-login">
      <a href="#login" className="p__opensans">Login/Register</a>
      <div/>
      <a href="/" className="p__opensans">Book Table</a>
  </div>*/}
    <div className="app__navbar-smallscreen">
    <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=>setToggleMenu(true)}/>
    {toggleMenu && (
    <div class="app__navbar-smallscreen_overlay flex__center slide_bottom">
      <MdClose fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)}/>
   
    <ul className="app__navbar-smallscreen_links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#menu">Products</a></li>
      <li className="p__opensans"><a href="#awards">Certifications</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>
    </div>
   )}
    </div>
  </nav>
)
  }
export default Navbar;
