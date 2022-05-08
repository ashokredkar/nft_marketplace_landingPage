import React from 'react';
import './Download.css';
import assets from '../../assets';

const Download = () => {
  return (
    <div className="download section__padding">
      <div className="download__info">
        <h1 className='primary'>Download the Source Code</h1>
        <h3 className='secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto id est beatae quos ut, itaque totam ex in!</h3>
        <button className='download__info_button custom__button'>Get Source Code</button>
        <img src={assets.scene} alt="home_hero" />
      </div>
    </div>
  )
}

export default Download