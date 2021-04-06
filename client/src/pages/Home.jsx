import React from 'react';
import Footer from '../component/Footer';
import Hero from '../component/Hero';
import Nav from '../component/Nav';

const Home = () => {
  return (
    <div className='home'>
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
