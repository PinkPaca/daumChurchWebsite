import React from 'react';
import SubNav from '../../components/SubNav';
import About from '../About';
import { menuItems } from '../../menuItems';

function Greeting() {
  return (
    <div className="greeting">
      <About />
      <div className="content">
        <SubNav title={menuItems[1].title} subMenus={menuItems[1].submenu} />
        <img src={require('../../assets/greeting_card.png')} alt="인삿말" />
      </div>
    </div>
  );
}

export default Greeting;
