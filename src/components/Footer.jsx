import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';

function Footer() {
  return (
    <div className="footer">
      <div className="social-medias">
        <YouTubeIcon fontSize="large" />
        <InstagramIcon fontSize="large" />
        <ShareIcon fontSize="large" />
      </div>
      <div className="contract">
        <a href="/">개인정보처리방침</a>
        <a href="/">이용약관</a>
      </div>
      <div className="contact">
        <p>전화번호 032)212-5498</p>
        <p>부천시 소사구 성주로 68번길 32(송내동 449-14)</p>
      </div>
    </div>
  );
}

export default Footer;
