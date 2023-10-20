import React from 'react';
import Navbar from '../components/Header/Navbar';
import about_nav from '../components/about/about_nav';

function About() {
  return (
    <div className="about">
      <Navbar />
      <img
        className="cross-img"
        src={require('../assets/cross-img.jpeg')}
        alt="십자가이미지"
      />
      <div className="content">
        <about_nav />
      </div>
    </div>
  );
}

export default About;
