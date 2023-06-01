import React, { useState, useEffect, useCallback } from 'react';

import classes from './AIForm.module.css';
import Card from '../UI/Card';
import Input from '../UI/Input';
import Button from '../UI/Button';

import axios from 'axios';

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

const AIForm = () => {
  const [channelViewCount, setChannelViewCount] = useState('');
  const [channelElapsedTime, setChannelElapsedTime] = useState('');
  const [channelVideoCount, setChannelVideoCount] = useState('');
  const [channelSubscriberCount, setChannelSubscriberCount] = useState('');
  const [channelCommentCount, setChannelCommentCount] = useState('');
  const [videoCategoryId, setVideoCategoryId] = useState(options[0].categoryID);
  const [likes, setLikes] = useState('');
  const [dislikes, setDislikes] = useState('');
  const [comments, setComments] = useState('');
  const [elapsedTime, setElapsedTime] = useState('');
  const [videoPublished, setVideoPublished] = useState('');
  const [views, setViews] = useState('');
  const [fetchData, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    const token = localStorage.getItem('isLoggedIn');
    const token_text = `Bearer ${token}`;
    const options = {
      method: 'POST',
      headers: {
        Authorization: token_text,
      },
    };
    try {
      const response = await fetch(
        'http://localhost:5000/users/profile',
        options
      );
      if (!response.ok) {
        throw new Error('Some went wrong!');
      }

      const data = await response.json();
      setFetchData(data.user);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  const channelViewCountHandler = (event) => {
    setChannelViewCount(event.target.value);
  };

  const channelElapsedTimeHandler = (event) => {
    setChannelElapsedTime(event.target.value);
  };

  const channelVideoCountHandler = (event) => {
    setChannelVideoCount(event.target.value);
  };

  const channelSubscriberCountHandler = (event) => {
    setChannelSubscriberCount(event.target.value);
  };

  const channelCommentCountHandler = (event) => {
    setChannelCommentCount(event.target.value);
  };

  const videoCategoryIdHandler = (event) => {
    setVideoCategoryId(event.target.value);
  };

  const likesHandler = (event) => {
    setLikes(event.target.value);
  };

  const dislikesHandler = (event) => {
    setDislikes(event.target.value);
  };

  const commentsHandler = (event) => {
    setComments(event.target.value);
  };

  const elapsedTimeHandler = (event) => {
    setElapsedTime(event.target.value);
  };

  const videoPublishedHandler = (event) => {
    setVideoPublished(event.target.value);
  };

  useEffect(() => {
    if (views > 0 ) {
      handleSaveHistory()
    }
  }, [views])

  const handleSaveHistory = () => {
    axios.post('http://localhost:5000/users/history/save', {
        channel_view_count: +channelViewCount,
        channel_elapsed_time: +channelElapsedTime,
        channel_video_count: +channelVideoCount,
        channel_subscriber_count: +channelSubscriberCount,
        channel_comment_count: +channelCommentCount,
        likes: +likes,
        video_category_id: +videoCategoryId,
        dislikes: +dislikes,
        comments: +comments,
        elapsed_time: +elapsedTime,
        video_published: videoPublished,
        user_id: +fetchData.id,
        predicted_views: +views
      })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/ai/predict', {
        channel_view_count: +channelViewCount,
        channel_elapsed_time: +channelElapsedTime,
        channel_video_count: +channelVideoCount,
        channel_subscriber_count: +channelSubscriberCount,
        channel_comment_count: +channelCommentCount,
        likes: +likes,
        video_categoryId: +videoCategoryId,
        dislikes: +dislikes,
        comments: +comments,
        elapsed_time: +elapsedTime,
        video_published: videoPublished,
      })
      .then(function (response) {
        setViews(response.data.views);
      })
  };

  return (
    <React.Fragment>
      <Card className={classes.ai}>
        <form onSubmit={submitHandler}>
          <Input
            id="channelViewCount"
            label="Channel View Count"
            type="number"
            onChange={channelViewCountHandler}
            value={channelViewCount}
            desc="All views from your videos"
          />
          <Input
            id="channelElapsedTime"
            label="Channel Elapsed Time"
            type="number"
            onChange={channelElapsedTimeHandler}
            value={channelElapsedTime}
            desc="Sum of elapsed time for all videos on the channel"
          />
          <Input
            id="channelVideoCount"
            label="Channel Video Count"
            type="number"
            onChange={channelVideoCountHandler}
            value={channelVideoCount}
            desc="How many videos is in your channel"
          />
          <Input
            id="channelSubscriberCount"
            label="Channel Subscriber Count"
            type="number"
            onChange={channelSubscriberCountHandler}
            value={channelSubscriberCount}
            desc="Number of subscribers of your channel"
          />
          <Input
            id="channelCommentCount"
            label="Channel Comment Count"
            type="number"
            onChange={channelCommentCountHandler}
            value={channelCommentCount}
            desc="Number of all comments of channel"
          />
          <div className={classes.control}>
            <label title='Category of you video'>Video Category Name</label>
            <select value={videoCategoryId} onChange={videoCategoryIdHandler}>
              {options.map((opt) => (
                <option value={opt.categoryID} key={opt.categoryID}>
                  {opt.Title}
                </option>
              ))}
            </select>
          </div>
          <Input
            id="likes"
            label="Likes"
            type="number"
            onChange={likesHandler}
            value={likes}
            desc="Number of likes"
          />
          <Input
            id="dislikes"
            label="Dislikes"
            type="number"
            onChange={dislikesHandler}
            value={dislikes}
            desc="Number of dislikes"
          />
          <Input
            id="comments"
            label="Comments"
            type="number"
            onChange={commentsHandler}
            value={comments}
            desc="Number of comments"
          />
          <Input
            id="elapsedTime"
            label="Elapsed Time"
            type="number"
            onChange={elapsedTimeHandler}
            value={elapsedTime}
            desc="Sum of elapsed time for all views on the video"
          />
          <Input
            id="videoPublished"
            label="Video Published"
            type="date"
            onChange={videoPublishedHandler}
            value={videoPublished}
            desc="Date of publishing"
          />
          <div className={classes.actions}>
            <Button type="submit" className={classes.btn}>
              Check
            </Button>
          </div>
        </form>
        <div className={classes.display}>
          <h2>Predicted Views</h2>
          <p>{views}</p>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default AIForm;
