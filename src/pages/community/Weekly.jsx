import React from 'react';
import Community from '../Community';
import SubNav from '../../components/SubNav';
import { menuItems } from '../../menuItems';
import Footer from '../../components/Footer';

function Weekly() {
  return (
    <div>
      <Community />
      <div className="content">
        <SubNav
          title={menuItems[4].title}
          subMenus={menuItems[4].submenu}
          current={0}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Weekly;
