import React, { useState, useEffect, useCallback } from 'react';
import Card from '../UI/Card';
import Spinner from 'react-bootstrap/Spinner';

import classes from './HistoryProfile.module.css';

import axios from 'axios';


import HistoryItem from './HistoryItem';

const HistoryProfile = (props) => {
  const [fetchData, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // `http://localhost:5000/users/history/get?user_id=${props.userId}`

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    const options = {
      method: 'GET',
    };
    try {
      const response = await fetch(
        `http://localhost:5000/users/history/get?user_id=${props.userId}`,
        options
      );
      if (!response.ok) {
        throw new Error('Some went wrong!');
      }

      const data = await response.json();
      setFetchData(data.histories);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  let content = <p>No Data Provided</p>;

  if (fetchData.length > 0) {
    let i = 0
    content = fetchData.map((history) => (
      <HistoryItem
        key={i++}
        channelCommentCount = {history.channel_comment_count}
        channelElapsedTime = {history.channel_elapsed_time}
        channelViewCount = {history.channel_view_count}
        comments = {history.comments}
        dislikes = {history.dislikes}
        elapsedTime = {history.elapsed_time}
        likes = {history.likes}
        subscriberCount = {history.subscriber_count}
        videoCategoryId = {history.video_category_id}
        videoCount = {history.video_count}
        videoPublished = {history.video_published}
      />
    ));
  }

  if (isLoading) {
    content = <Spinner animation="border" />;
  }

  return <Card className={classes.history}><div className={classes.display}>{content}</div></Card>;
};

export default HistoryProfile;
