import React, { useState, useCallback, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Chart from './Chart';
import Button from '../UI/Button';
import classes from './DisplayCategory.module.css';
import info from './Info';

const DisplayCategory = (props) => {
  const [fetchData, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [prop, setProp] = useState(props.pickedCategory);

  const url = `http://localhost:5000/ai/statistics/describe?videoCategoryId=${prop}`;

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setFetchData(data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  const getData = () => {
    setProp(props.pickedCategory);
    fetchDataHandler();
  };

  let chartList = <p>No data provided.</p>;

  if (isLoading) {
    chartList = <Spinner animation="border" />;
  } else if (fetchData && props.pickedCategory) {
    let i = 0;
    chartList = info.map((category) => (
      <Chart key={i++} data={fetchData[category]} name={category}/>
    ));
  }

  return (
    <React.Fragment>
      <div className={classes.center}>
        <Button onClick={getData} type="submit" className={classes.btn}>
          Filter
        </Button>
      </div>
      <div className={classes['grid-container']}>{chartList}</div>
    </React.Fragment>
  );
};

export default DisplayCategory;
