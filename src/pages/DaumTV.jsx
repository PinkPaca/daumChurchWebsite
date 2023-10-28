import React from 'react';
import Navbar from '../components/Header/Navbar';
import BannerPath from '../components/BannerPath';

function DaumTV(props) {
  const { bannerPath } = props;
  return (
    <div className="banner">
      <Navbar />
      <img
        className="daumTV-img"
        src={require('../assets/KakaoTalk_Photo_2023-10-27-14-48-03.jpeg')}
        alt="다음TV이미지"
      />
      <BannerPath bannerPath1={'다음TV'} bannerPath2={bannerPath} />
    </div>
  );
}

export default DaumTV;
