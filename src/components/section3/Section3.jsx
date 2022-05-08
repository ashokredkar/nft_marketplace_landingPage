import React from 'react';
import './Section3.css';
import assets from '../../assets';

const Section3 = () => {
  return (
    <div className="third section__padding fadeRightMini">
      <div className="third__img">
        <img src={assets.feature} alt="home_hero" />
      </div>
      <div className="third__info">
        <h1 className='primary'>Deployment</h1>
        <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequatur magnam voluptatibus in perspiciatis est, dolorum esse tempore, nisi autem quam non officia mollitia, minus quaerat ipsam voluptate ab numquam! Itaque tempore sint exercitationem.</p>
      </div>
    </div>
  )
}

export default Section3