import * as React from 'react';
import SubNav from '../../components/SubNav';
import { menuItems } from '../../menuItems';
import About from '../About';
import Timeline from '@mui/lab/Timeline';
import HistoryTimeline from '../../components/about/HistoryTimeline';
import { historyItems } from './historyItems';
import Footer from '../../components/Footer';

export default function History() {
  return (
    <div className="history">
      <About bannerPath="교회연혁" />
      <div className="content">
        <SubNav
          title={menuItems[1].title}
          subMenus={menuItems[1].submenu}
          current={2}
        />
        <div className="history-timeline">
          <Timeline position="alternate" sx={{ m: 'auto' }}>
            {historyItems.map((item, index) => {
              return (
                <HistoryTimeline
                  year={item.year}
                  historyItems={item.history}
                  key={index}
                />
              );
            })}
          </Timeline>
        </div>
      </div>
      <Footer />
    </div>
  );
}
