import React from 'react';

import classes from './TilesList.module.css';
import Chart from '../components/Charts/Chart';
import StatisticsForm from "../components/Charts/StatisticsForm";

const TilesList = () => {
  return (
    <React.Fragment>
      <StatisticsForm/>
      <div className={classes['grid-container']}>
        <Chart
          url="http://localhost:5000/ai/statistics/describe"
          y="VideoCommentCount"
          title="Video comment count"
        />
        <Chart
          url="http://localhost:5000/ai/statistics/describe"
          y="channelCommentCount"
          title="Channel comment count"
        />
        <Chart
          url="http://localhost:5000/ai/statistics/describe"
          y="channelViewCount"
          title="channel view count"
        />
        {/*<Chart*/}
        {/*  url="http://localhost:5000/ai/statistics/comments"*/}
        {/*  y="Average Comments"*/}
        {/*  title="Average Comments"*/}
        {/*/>*/}
      </div>
    </React.Fragment>
  );
};

export default TilesList;
