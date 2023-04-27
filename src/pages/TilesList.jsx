import React from 'react';

import classes from './TilesList.module.css';
import Chart from '../components/Charts/Chart';

const TilesList = () => {
  return (
    <React.Fragment>
      <div className={classes['grid-container']}>
        <Chart url='http://localhost:5000/ai/statistics/likes' />
        <Chart url='http://localhost:5000/ai/statistics/likes' />
        <Chart url='http://localhost:5000/ai/statistics/likes' />
        <Chart url='http://localhost:5000/ai/statistics/likes' />
      </div>
    </React.Fragment>
  );
};

export default TilesList;
