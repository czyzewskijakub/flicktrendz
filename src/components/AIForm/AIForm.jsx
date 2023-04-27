import React, { useState } from 'react';

import classes from './AIForm.module.css';
import Card from '../UI/Card';
import Input from '../UI/Input';
import Button from '../UI/Button';

import axios from 'axios';

const AIForm = () => {
  const [channelViewCount, setChannelViewCount] = useState('');
  const [channelElapsedTime, setChannelElapsedTime] = useState('');
  const [channelVideoCount, setChannelVideoCount] = useState('');
  const [channelSubscriberCount, setChannelSubscriberCount] = useState('');
  const [channelCommentCount, setChannelCommentCount] = useState('');
  // const [videoCategoryId, setVideoCategoryId] = useState('');
  const [likes, setLikes] = useState('');
  const [dislikes, setDislikes] = useState('');
  const [comments, setComments] = useState('');
  const [elapsedTime, setElapsedTime] = useState('');
  // const [videoPublished, setVideoPublished] = useState('');

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

  // const videoCategoryIdHandler = (event) => {
  //   setVideoCategoryId(event.target.value);
  // };

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

  // const videoPublishedHandler = (event) => {
  //   setVideoPublished(event.target.value);
  // };

  // const createRequestData = (data) = {};

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/ai/predict', {
        channel_view_count: 1,
        channel_elapsed_time: 1,
        channel_video_count: 2,
        channel_subscriber_count: 3,
        channel_comment_count: 5,
        // video_categoryId: 4,
        likes: 6,
        dislikes: 7,
        comments: 8,
        elapsed_time: 9,
        // video_published: 11,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
          />
          <Input
            id="channelElapsedTime"
            label="Channel Elapsed Time"
            type="number"
            onChange={channelElapsedTimeHandler}
            value={channelElapsedTime}
          />
          <Input
            id="channelVideoCount"
            label="Channel Video Count"
            type="number"
            onChange={channelVideoCountHandler}
            value={channelVideoCount}
          />
          <Input
            id="channelSubscriberCount"
            label="Channel Subscriber Count"
            type="number"
            onChange={channelSubscriberCountHandler}
            value={channelSubscriberCount}
          />
          <Input
            id="channelCommentCount"
            label="Channel Comment Count"
            type="number"
            onChange={channelCommentCountHandler}
            value={channelCommentCount}
          />
          {/* <Input
            id="videoCategoryId"
            label="Video Category Id"
            type="number"
            onChange={videoCategoryIdHandler}
            value={videoCategoryId}
          /> */}
          <Input
            id="likes"
            label="Likes"
            type="number"
            onChange={likesHandler}
            value={likes}
          />
          <Input
            id="dislikes"
            label="Dislikes"
            type="number"
            onChange={dislikesHandler}
            value={dislikes}
          />
          <Input
            id="comments"
            label="Comments"
            type="number"
            onChange={commentsHandler}
            value={comments}
          />
          <Input
            id="elapsedTime"
            label="Elapsed Time"
            type="number"
            onChange={elapsedTimeHandler}
            value={elapsedTime}
          />
          {/* <Input
            id="videoPublished"
            label="Video Published"
            type="number"
            onChange={videoPublishedHandler}
            value={videoPublished}
          /> */}
          <div className={classes.actions}>
            <Button type="submit" className={classes.btn}>
              Check
            </Button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AIForm;
