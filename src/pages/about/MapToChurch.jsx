import React from 'react';
import SubNav from '../../components/SubNav';
import { menuItems } from '../../menuItems';
import About from '../About';
import Footer from '../../components/Footer';

function MapToChurch() {
  return (
    <div className="map">
      <About bannerPath="오시는 길" />
      <div className="content">
        <SubNav
          title={menuItems[1].title}
          subMenus={menuItems[1].submenu}
          current={3}
        />
      </div>
      <Footer />
    </div>
  );
}

export default MapToChurch;
