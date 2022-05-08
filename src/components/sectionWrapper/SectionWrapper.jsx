import React from 'react';
import './SectionWrapper.css';
import assets from '../../assets';

const SectionWrapper = () => {
  return (
    <div className="first section__padding">
      <div className="first__info fadeLeftMini">
        <h1 className='primary'>Your own store of Nifty NFT's. Start Selling & Growing</h1>
        <h3 className='secondary'>"Buy, store, collect NFT's, exchange and earn CRYPTO. Join 25+ million users on ProNEF MarketPlace"</h3>
        <div className='first__info_button custom__button'>
          <img src={assets.expo} alt="expo02" />
          <div>
            <p className='para'>View it on</p>
            <p className='para'><b>Expo Store</b></p>
          </div>
        </div>
      </div>
      <div className="first__img fadeRightMini">
        <img src={assets.homeHero} alt="home_hero" />
      </div>
    </div>
  )
}

export default SectionWrapper