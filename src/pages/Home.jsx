import React from 'react';
import Navbar from '../components/Header/Navbar';
import ControlledCarousel from '../components/Home/ControlledCarousel';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <ControlledCarousel />
    </div>
  );
}

export default Home;
