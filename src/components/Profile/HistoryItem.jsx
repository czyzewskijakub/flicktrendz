import React from 'react';

import classes from './HistoryItem.module.css';

const HistoryItem = (props) => {
  return (
    <React.Fragment>
      <div className={classes.border}>
        <div className={classes.lab}>
          <label>channelCommentCount</label>
          <p>{props.channelCommentCount}</p>
        </div>
        <div className={classes.lab}>
          <label>channelElapsedTime</label>
          <p>{props.channelElapsedTime}</p>
        </div>
        <div className={classes.lab}>
          <label>channelViewCount</label>
          <p>{props.channelViewCount}</p>
        </div>
        <div className={classes.lab}>
          <label>comments</label>
          <p>{props.comments}</p>
        </div>
        <div className={classes.lab}>
          <label>dislikes</label>
          <p>{props.dislikes}</p>
        </div>
        <div className={classes.lab}>
          <label>elapsedTime</label>
          <p>{props.elapsedTime}</p>
        </div>
        <div className={classes.lab}>
          <label>likes</label>
          <p>{props.likes}</p>
        </div>
        <div className={classes.lab}>
          <label>subscriberCount</label>
          <p>{props.subscriberCount}</p>
        </div>
        <div className={classes.lab}>
          <label>videoCategoryId</label>
          <p>{props.videoCategoryId}</p>
        </div>
        <div className={classes.lab}>
          <label>videoCount</label>
          <p>{props.videoCount}</p>
        </div>
        <div className={classes.lab}>
          <label>videoPublished</label>
          <p>{props.videoPublished}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HistoryItem;
