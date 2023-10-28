import React from 'react';
import Ministry from '../Ministry';
import SubNav from '../../components/SubNav';
import { menuItems } from '../../menuItems';
import Footer from '../../components/Footer';
import Navbar from '../../components/Header/Navbar';

function MissionTrip() {
  return (
    <div>
      <Navbar />
      <Ministry bannerPath="단기선교" />
      <div className="content">
        <SubNav
          title={menuItems[3].title}
          subMenus={menuItems[3].submenu}
          current={0}
        />
      </div>
      <Footer />
    </div>
  );
}

export default MissionTrip;
