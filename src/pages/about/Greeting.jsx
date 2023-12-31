import React from 'react';
import SubNav from '../../components/SubNav';
import About from '../About';
import { menuItems } from '../../menuItems';
import Footer from '../../components/Footer';

function Greeting() {
  return (
    <div className="greeting">
      <About bannerPath="인삿말" />
      <div className="content">
        <SubNav
          title={menuItems[1].title}
          subMenus={menuItems[1].submenu}
          current={0}
        />
        <img src={require('../../assets/greeting_card.png')} alt="인삿말" />
      </div>
      <Footer />
    </div>
  );
}

export default Greeting;
