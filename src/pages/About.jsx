import React from 'react';
import Navbar from '../components/Header/Navbar';
import SubNav from '../components/SubNav.jsx';
import { menuItems } from '../menuItems';

function About() {
  console.log(menuItems[1].submenu);
  return (
    <div className="about">
      <Navbar />
      <img
        className="cross-img"
        src={require('../assets/cross-img.jpeg')}
        alt="십자가이미지"
      />
    </div>
  );
}

export default About;
