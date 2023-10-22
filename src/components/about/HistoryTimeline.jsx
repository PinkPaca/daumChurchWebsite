import React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

function HistoryTimeline(props) {
  const { year, historyItems } = props;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5" component="span">
          {year}
        </Typography>
        {historyItems.map((historyItem, index) => {
          return (
            <Typography key={index} fontSize={'12'}>
              {historyItem}
            </Typography>
          );
        })}
      </TimelineContent>
    </TimelineItem>
  );
}

export default HistoryTimeline;
