import React from 'react';
import { SubHeading } from '../../components';
import {images,data} from '../../constants';
import './Certification.css';

const AwardCard=({award:{imgUrl,title,subtitle}})=>(
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
  </div>
)

const Laurels = () => (
  <div className="app__bg-plain section__padding" id="awards">
    <div className="app__laurel_info">
      <SubHeading title=""/>
      <h1 className="headtext__cormorant">Our Quality</h1>
        <div className="app__laurels_awards">
          {data.awards.map((award=><AwardCard award={award} key={award.title}/>))}

        </div>
    </div>
    <div className="app__right_img-text">
        <p className="p__opensans">Our commitment to excellence is reflected in our adherence to globally recognized quality and regulatory standards within the food processing industry. With certifications from ISO, HACCP, GAP and OHSAS we ensure the highest levels of safety and compliance. Our dedication extends to country-specific regulations, guaranteeing that our products and facilities meet all necessary certifications </p>
    </div>

  </div>
);

export default Laurels;
