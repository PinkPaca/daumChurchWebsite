import React from 'react';
import SubNav from '../../components/SubNav';
import About from '../About';
import { menuItems } from '../../menuItems';

function Services() {
  return (
    <div className="services">
      <About />
      <div className="content">
        <SubNav title={menuItems[1].title} subMenus={menuItems[1].submenu} />
        <table>
          <thead>
            <tr>
              <th colspan="2">예배시간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>어린이예배</td>
              <td>오전11:00</td>
            </tr>
            <tr>
              <td>젊은이예배</td>
              <td>오후02:00</td>
            </tr>
            <tr>
              <td>청소년예배</td>
              <td>오전11:00</td>
            </tr>
            <tr>
              <td>주일1부예배</td>
              <td>오전09:00</td>
            </tr>
            <tr>
              <td>주일2부예배</td>
              <td>오전11:00</td>
            </tr>
            <tr>
              <td>수요예배</td>
              <td>저녁08:00</td>
            </tr>
            <tr>
              <td>금요기도회</td>
              <td>저녁09:00</td>
            </tr>
            <tr>
              <td>새벽기도회</td>
              <td>새벽06:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Services;
