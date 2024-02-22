import React from 'react';
import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';
import { render } from 'react-dom';

const Header = () => {
  const handleButtonClick = () => {
    const homeSection = document.getElementById('about');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
  };
  return(
    <div className="app__header app__bg app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
     {/*--<SubHeading title="Welcome to"/>*/}
     <h1 className="app__header-h1">MARUTI FRUIT CANNING INDUSTRIES</h1>
     <img src={images.greenleaf} className='leaf_img'/>
     <p className="p__opensans" style={{margin:'2rem 0'}}>"We are one of the leading fruit pulp manufacturers in India. Our expertise lies in producing a wide range of fruit purees, including organic variants and concentrates, to meet the demands of both domestic and international markets. Additionally, we have established ourselves as a key exporter of mango pulp, solidifying our reputation in the industry."</p>
     {/*<button type="button" className="custom__button" onClick={handleButtonClick}>Know More</button>*/}
    </div>
    <div className="app__wrapper_img">
      <img src={images.fruitswallpaper} alt="header img"/>

    </div>
    
  </div>
)
}

export default Header;
