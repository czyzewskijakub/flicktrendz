import React from 'react';
import { Link } from 'react-router-dom'

import Navigation from './Navigation';
import FlicktrendzIcon from '../UI/FlicktrendzIcon';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes['main-header']}>
      <div className={classes.icon}>
        <Link to="/">
          <FlicktrendzIcon />
        </Link>
        <h1>licktrendz</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default MainHeader;
