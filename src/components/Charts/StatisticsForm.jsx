import React, { useState } from 'react';

import Card from '../UI/Card';

import classes from './StatisticsForm.module.css';
import Button from '../UI/Button';

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

const StatisticsForm = (props) => {
  const [videoCategoryId, setVideoCategoryId] = useState(options[0].categoryID);
  const submitHandler = (event) => {
    event.preventDefault();
    props.onUserPick(videoCategoryId);
  };

  const videoCategoryIdHandler = (event) => {
    setVideoCategoryId(event.target.value);
    props.onUserPick(videoCategoryId);
    console.log(videoCategoryId);
  };

  return (
    <Card className={classes.stat}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>Video Category Name</label>
          <select value={videoCategoryId} onChange={videoCategoryIdHandler}>
            {options.map((opt) => (
              <option value={opt.categoryID} key={opt.categoryID}>
                {opt.Title}
              </option>
            ))}
          </select>
        </div>
        {/* <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Filter
          </Button>
        </div> */}
      </form>
    </Card>
  );
};

export default StatisticsForm;
