import React, { useState, useEffect, useCallback } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const UserProfile = () => {
  const [fetchData, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Origin: '',
      },
      body: JSON.stringify({
        client_id: '(API KEY)',
        client_secret: '(API SECRET)',
        grant_type: 'client_credentials',
      }),
    };
    try {
      const response = await fetch('', options);
      if (!response.ok) {
        throw new Error('Some went wrong!');
      }

      const data = await response.json();
      setFetchData(data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  return (
    <React.Fragment>
      {/* <img src={ctx.user.profile_picture_url} alt={`${ctx.user.name}'s avatar`} /> */}
      {/* <h2>{ctx.user.name}</h2> */}
    </React.Fragment>
  );
};

export default UserProfile;
