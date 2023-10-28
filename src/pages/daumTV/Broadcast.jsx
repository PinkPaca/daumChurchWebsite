import React from 'react';
import DaumTV from '../DaumTV';
import Footer from '../../components/Footer';
import SubNav from '../../components/SubNav';
import { menuItems } from '../../menuItems';

function Broadcast() {
  return (
    <div>
      <DaumTV bannerPath="예배실황" />
      <div className="content">
        <SubNav
          title={menuItems[2].title}
          subMenus={menuItems[2].submenu}
          current={4}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Broadcast;
