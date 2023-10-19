import React from 'react';
import { menuItems } from '../../menuItems.js';
import MenuItems from './MenuItem';

function Menus() {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
              isSubmenu={false}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default Menus;
