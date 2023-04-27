import React from 'react';

import classes from './TilesList.module.css';
import Chart from '../components/Charts/Chart';

const TilesList = () => {
  return (
    <React.Fragment>
      <div className={classes['grid-container']}>
        <Chart
          url="http://localhost:5000/ai/statistics/likes"
          y="Average Likes"
          title="Average Likes"
        />
        <Chart
          url="http://localhost:5000/ai/statistics/dislikes"
          y="Average Dislikes"
          title="Average Dislikes"
        />
        <Chart
          url="http://localhost:5000/ai/statistics/views"
          y="Average Views"
          title="Average Views"
        />
        <Chart
          url="http://localhost:5000/ai/statistics/comments"
          y="Average Comments"
          title="Average Comments"
        />
      </div>
    </React.Fragment>
  );
};

export default TilesList;
