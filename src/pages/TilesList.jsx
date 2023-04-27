import React from 'react';

import classes from './TilesList.module.css';
import Tile from '../components/Tiles/Tile';

const TilesList = () => {
  return (
    <React.Fragment>
      <div className={classes['grid-container']}>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    </React.Fragment>
  );
};

export default TilesList;
