import React from 'react';
import Navbar from '../components/Header/Navbar';

function Community() {
  return (
    <div className="banner">
      <Navbar />
      <img
        className="ex-img"
        src={require('../assets/team-386673_1280.jpg')}
        alt="공동체 이미지"
      />
    </div>
  );
}

export default Community;
