import React from 'react';
import './Hero.css';

import arrow_icon from '../Assets/arrow.png'


export const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        
        <h2>NEW ARRIVALS</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
           
            </div>
            <div className="hero-hand-icon1  "><p>collections</p></div>  
            <div className="hero-hand-icon2  "><p>For everyone</p></div>
        </div>
        <div className='hero-latest-btn'>
          <div>latest collection</div>
          <img src={arrow_icon} alt=''/>
        </div>
      </div>
      
    </div>
  );
};
