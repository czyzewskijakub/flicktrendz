import React from 'react';

import Card from '../UI/Card';

import classes from './Item.module.css';

const Item = (props) => {
  return (
    <Card className={classes.display}>
      <h2>{props.title}</h2>
    </Card>
  );
};

export default Item;
