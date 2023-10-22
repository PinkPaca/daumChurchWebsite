import React from 'react';
import Community from '../Community';
import SubNav from '../../components/SubNav';
import { menuItems } from '../../menuItems';
import Footer from '../../components/Footer';

function Counsel() {
  return (
    <div>
      <Community />
      <div className="content">
        <SubNav
          title={menuItems[4].title}
          subMenus={menuItems[4].submenu}
          current={2}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Counsel;
