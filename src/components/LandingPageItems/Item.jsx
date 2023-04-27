import React from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './Item.module.css';

const Item = (props) => {
  return (
    <Card className={classes.display}>
      <h2 className={classes.title}>{props.title}</h2>
      <div className={classes.control}>
        <img src={props.svg} alt="Your SVG" className={classes.scale}/>
      </div>
      <p className={classes.desc} >{props.text}</p>
      <div className={classes['button-container']}>
        <Button>Check</Button>
      </div>
    </Card>
  );
};

export default Item;
