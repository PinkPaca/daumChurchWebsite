import React from 'react';
import Navbar from '../components/Header/Navbar';
import BannerPath from '../components/BannerPath';

function About(props) {
  const { bannerPath } = props;
  return (
    <div className="banner">
      <Navbar />
      <img
        className="ex-img"
        src={require('../assets/cross-img.jpeg')}
        alt="십자가이미지"
      />
      <BannerPath bannerPath1={'교회소개'} bannerPath2={bannerPath} />
    </div>
  );
}

export default About;
