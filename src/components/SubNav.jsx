import React, { useState } from 'react';

function SubNav(props) {
  const { title, subMenus } = props; // Destructure props

  return (
    <div className={`sub_nav`}>
      <span className="subject">{title}</span>
      <ul>
        {subMenus.map((submenu, index) => {
          return (
            <li className={`submenu-item`} key={index}>
              <a href={submenu.url}>{submenu.title} </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SubNav;
