import React from 'react';
import Navbar from '../components/Header/Navbar';

function About() {
  return (
    <div className="banner">
      <Navbar />
      <img
        className="ex-img"
        src={require('../assets/cross-img.jpeg')}
        alt="십자가이미지"
      />
    </div>
  );
}

export default About;
