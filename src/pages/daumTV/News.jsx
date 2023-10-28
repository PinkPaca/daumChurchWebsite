import React from 'react';
import DaumTV from '../DaumTV';
import Footer from '../../components/Footer';
import SubNav from '../../components/SubNav';
import { menuItems } from '../../menuItems';

function News() {
  return (
    <div>
      <DaumTV bannerPath="보도자료" />
      <div className="content">
        <SubNav
          title={menuItems[2].title}
          subMenus={menuItems[2].submenu}
          current={5}
        />
      </div>
      <Footer />
    </div>
  );
}

export default News;
