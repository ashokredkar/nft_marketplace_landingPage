import React from 'react';
import assets from '../../assets';
import './Section4.css';

const Section4 = () => {
  return (
    <div className="fourth section__padding">
      {/* <div className="overlay"> */}
        <div className="fourth__info">
          <h1 className='primary'>A creative way to showcase the STORE</h1>
          <h3 className='secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem at, veniam unde, tenetur ullam accusamus quisquam ipsa reiciendis in deserunt quis non ducimus vero iste.</h3>
        </div>
        <div className="fourth__img">
          <img src={assets.mockup} alt="home_hero" />
        </div>
      {/* </div> */}
    </div>
  )
}

export default Section4