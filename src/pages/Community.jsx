import React from 'react';
import Navbar from '../components/Header/Navbar';
import BannerPath from '../components/BannerPath';

function Community(props) {
  const { bannerPath } = props;
  return (
    <div className="banner">
      <Navbar />
      <img
        className="ex-img"
        src={require('../assets/team-386673_1280.jpg')}
        alt="공동체 이미지"
      />
      <BannerPath bannerPath1={'교회소개'} bannerPath2={bannerPath} />
    </div>
  );
}

export default Community;
