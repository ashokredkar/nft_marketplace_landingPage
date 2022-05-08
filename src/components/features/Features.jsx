import React from 'react';
import './Features.css';
import assets from '../../assets';

const Features = () => {
  return (
    <div className='features section__padding'>
      <h1 className='primary'>Technology of DEVELOPMENT</h1>
      <p className='para'>ProNef has been developed using a cross-platform technology, React-Native. It has been written with JavaScript and rendered through NATIVE Code.</p>
      <div className='images'>
        <div className='react'>
          <img src={assets.react} alt="react_img" />
          <p className="para" style={{marginTop: '0'}}>React NATIVE</p>
        </div>
        <div className='js'>
          <img src={assets.javascript} alt="js_img" />
          <p className="para" style={{marginTop: '0'}}>JavaScript</p>
        </div>
      </div>
    </div>
  )
}

export default Features