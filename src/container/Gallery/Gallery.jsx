import React from 'react';
import { BsInstagram,BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Gallery.css';

const galleryImages=[images.machine1,images.machine2,images.machine3,images.machine4,images.machine5];

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll=(direction)=>{
    const {current} = scrollRef;
    if(direction==='left'){
      current.scrollLeft-=300;
    }
    else  
      current.scrollLeft+=300;
  }

return (
  <div className="app__gallery flex__center" id="gallery">
    <div className="app__gallery-content">
      <SubHeading title=""/>
      <h1 className='headtext__cormorant' >Photo Gallery</h1>
      <p className="p__opensans" style={{color:'#AAA',marginTop:'2rem'}}> Delve into the intricate world of fruit pulp processing machinery, where innovation meets efficiency to unlock the essence of fruits. </p>
     
    </div>

    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {galleryImages.map((image,index)=>(
          <div className="app__gallery-images_card flex__center" key={`gallery_image-${index+1}`}>
          <img src={image} alt="gallery"/>
          <BsInstagram className="gallery__image-icon"/>
          </div>
        ))}

      </div>
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className="gallery__arrow-icon" onClick={()=>scroll('left')}/>
        <BsArrowRightShort className="gallery__arrow-icon" onClick={()=>scroll('right')}/>
      </div>

    </div>
    
  </div>
);
}
export default Gallery;
