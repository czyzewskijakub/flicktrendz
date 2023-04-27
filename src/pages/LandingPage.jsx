import React from 'react';

import TilesList from '../components/Tiles/TilesList';
import Item from '../components/LandingPageItems/Item';

import classes from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className={classes['flex-container']}>
        <Item title="About project"/>
        <Item title="About project"/>
        <Item title="About project"/>
      </div>
      {/* <TilesList /> */}
    </React.Fragment>
  );
};

export default LandingPage;
