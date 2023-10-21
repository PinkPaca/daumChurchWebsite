import React from 'react';
import Navbar from '../components/Header/Navbar';
import ControlledCarousel from '../components/Home/ControlledCarousel';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <ControlledCarousel />
      <Footer />
    </div>
  );
}

export default Home;
