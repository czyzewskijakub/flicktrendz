import React, { useState, useEffect, useCallback } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Card from '../components/UI/Card';
import HistoryProfile from '../components/Profile/HistoryProfile';

import classes from './UserProfile.module.css';

const UserProfile = () => {
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

  let content = <p>No Data Provided</p>;

  if (fetchData.email) {
    content = (
      <React.Fragment>
        <div className={classes.avatar}>
          <img
            className={classes.avatar__image}
            src={fetchData.profile_picture_url}
            alt={`${fetchData.name}'s avatar`}
          />
        </div>
        <h2>{fetchData.name}</h2>
        <p>{fetchData.email}</p>
      </React.Fragment>
    );
  }

  if (isLoading) {
    content = <Spinner animation="border" />;
  }

  return (
    <React.Fragment>
      <Card className={classes.profile}>{content}</Card>
      {(!isLoading && fetchData.email) && <HistoryProfile userId={fetchData.id}/>}
    </React.Fragment>
  );
};

export default UserProfile;
