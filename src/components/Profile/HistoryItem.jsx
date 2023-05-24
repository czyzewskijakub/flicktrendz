import React from 'react';

import classes from './HistoryItem.module.css';

const options = [
  {
    categoryID: 1,
    Title: 'Film & Animation',
  },
  {
    categoryID: 2,
    Title: 'Autos & Vehicles',
  },
  {
    categoryID: 10,
    Title: 'Music',
  },
  {
    categoryID: 15,
    Title: 'Pets & Animals',
  },
  {
    categoryID: 17,
    Title: 'Sports',
  },
  {
    categoryID: 18,
    Title: 'Short Movies',
  },
  {
    categoryID: 19,
    Title: 'Travel & Events',
  },
  {
    categoryID: 20,
    Title: 'Gaming',
  },
  {
    categoryID: 21,
    Title: 'Videoblogging',
  },
  {
    categoryID: 22,
    Title: 'People & Blogs',
  },
  {
    categoryID: 23,
    Title: 'Comedy',
  },
  {
    categoryID: 24,
    Title: 'Entertainment',
  },
  {
    categoryID: 25,
    Title: 'News & Politics',
  },
  {
    categoryID: 26,
    Title: 'Howto & Style',
  },
  {
    categoryID: 27,
    Title: 'Education',
  },
  {
    categoryID: 28,
    Title: 'Science & Technology',
  },
  {
    categoryID: 30,
    Title: 'Movies',
  },
  {
    categoryID: 31,
    Title: 'Anime/Animation',
  },
  {
    categoryID: 32,
    Title: 'Action/Adventure',
  },
  {
    categoryID: 33,
    Title: 'Classics',
  },
  {
    categoryID: 34,
    Title: 'Comedy',
  },
  {
    categoryID: 35,
    Title: 'Documentary',
  },
  {
    categoryID: 36,
    Title: 'Drama',
  },
  {
    categoryID: 37,
    Title: 'Family',
  },
  {
    categoryID: 38,
    Title: 'Foreign',
  },
  {
    categoryID: 39,
    Title: 'Horror',
  },
  {
    categoryID: 40,
    Title: 'Sci-Fi/Fantasy',
  },
  {
    categoryID: 41,
    Title: 'Thriller',
  },
  {
    categoryID: 42,
    Title: 'Shorts',
  },
  {
    categoryID: 43,
    Title: 'Shows',
  },
  {
    categoryID: 44,
    Title: 'Trailers',
  },
];

const HistoryItem = (props) => {
  const categoryName = options.find(category => category.categoryID === props.videoCategoryId)

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
          <label>Category:</label>
          <p>{categoryName.Title}</p>
        </div>
        <div className={classes.lab}>
          <label>videoCount</label>
          <p>{props.videoCount}</p>
        </div>
        <div className={classes.lab}>
          <label>videoPublished</label>
          <p>{props.videoPublished}</p>
        </div>
        <div className={classes.lab}>
          <label>Predict Result</label>
          <p>{props.predicted_views}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HistoryItem;
