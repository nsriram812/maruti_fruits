import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';
import './Word.css';

const Chef = () => (
  <div className="app__bg-chef app__wrapper app_padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.women} alt="chef"/>
    </div>
    <div className="app__wrapper_info">
    <SubHeading title="Proprietor's word"/>
    <h1 className="headtext__cormorant-chef">What we believe in</h1>

    <div className="app__chef-content">
      <div className="app__chef-content_quote">
        <img src={images.quote} alt="quote"/>
        <p className="p__opensans">As the proprietor of our esteemed fruit pulp manufacturing company, </p>
      </div>
      <p className="p__opensans">I assure you of our unwavering commitment to quality, sustainability, and customer satisfaction. With dedication and innovation at our core, we strive to deliver the freshest and most flavorful fruit pulps to delight taste buds worldwide. Savor the rich flavors and vibrant colors that signify the superior quality of our handcrafted pulps. Join us in our journey to bring nature's goodness to every table, one delicious spoonful at a time, embodiying the essence of superior craftsmanship and dedication to excellence.</p>
    </div>
    <div className="app__chef-sign">
    <p>Ananda Naidu</p>
    <p className="p__opensans">Proprietor</p>
    <img src={images.sign} alt="sign"/>
    </div>

    </div>
  </div>
);

export default Chef;
