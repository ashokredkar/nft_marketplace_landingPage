import React from 'react';
import './Section2.css';
import assets from '../../assets';

const Section2 = () => {
    return (
        <div className="second section__padding fadeLeftMini">
            <div className="second__img">
                <img src={assets.homeCards} alt="home_hero" />
            </div>
            <div className="second__info">
                <h1 className='primary'>Smart User Interface MARKETPLACE</h1>
                <h3 className='secondary'>Experience a buttery UI of ProNef NFT MarketPlace. Smooth constant colors of a fluent UI design</h3>
            </div>
        </div>
    )
}

export default Section2