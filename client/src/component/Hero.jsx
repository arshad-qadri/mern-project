import React from 'react';
import '../css/Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left'></div>
      <div className='right'></div>
      <div className='text'>
        <div className='welcome'>
          <h5>Welcome</h5>
        </div>
        <div className='desc'>
          <p>We are the MERN Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
