import React from 'react';
import Ministry from '../Ministry';
import SubNav from '../../components/SubNav';
import { menuItems } from '../../menuItems';
import Footer from '../../components/Footer';
import Navbar from '../../components/Header/Navbar';

function VisionTrip() {
  return (
    <div>
      <Navbar />
      <Ministry bannerPath="비전트립" />
      <div className="content">
        <SubNav
          title={menuItems[3].title}
          subMenus={menuItems[3].submenu}
          current={2}
        />
      </div>
      <Footer />
    </div>
  );
}

export default VisionTrip;
