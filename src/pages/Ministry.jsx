import React from 'react';
import BannerPath from '../components/BannerPath';

function Ministry(props) {
  const { bannerPath } = props;
  return (
    <div className="banner">
      <img
        className="ministry-img"
        src={require('../assets/E9AE3F84-63C6-4379-AAA8-9948E96F6440.JPG')}
        alt="사역사진"
      />
      <BannerPath bannerPath1={'교회소개'} bannerPath2={bannerPath} />
    </div>
  );
}

export default Ministry;
