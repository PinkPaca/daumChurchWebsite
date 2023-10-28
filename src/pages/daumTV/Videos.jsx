import React from 'react';
import DaumTV from '../DaumTV';
import Footer from '../../components/Footer';
import SubNav from '../../components/SubNav';
import { menuItems } from '../../menuItems';

function Videos() {
  return (
    <div>
      <DaumTV bannerPath="특별영상" />
      <div className="content">
        <SubNav
          title={menuItems[2].title}
          subMenus={menuItems[2].submenu}
          current={2}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Videos;
