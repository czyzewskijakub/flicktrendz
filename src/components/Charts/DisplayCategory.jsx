import React, {useState, useCallback, useEffect} from 'react';

import Spinner from 'react-bootstrap/Spinner';

import Chart from './Chart';
import classes from './DisplayCategory.module.css';

const url = 'http://localhost:5000/ai/statistics/describe?videoCategoryId=';

const DisplayCategory = (props) => {
  const [fetchData, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${props.pickedCategory}`);
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
    props.pickedCategory
    fetchDataHandler();
  }, [fetchDataHandler, props.pickedCategory]);

  let chartList = <p>No data provided.</p>;

  if (isLoading) {
    chartList = <Spinner animation="border" />;
  }
  if (fetchData) {
    let format = []
    for(let i in fetchData) {
      format.push([i, fetchData[i]]);
    }
    console.log(format)
    // let i = 0
    // chartList = fetchData.map((category) => (
    //   <Chart key={i++}  />
    // ));
  }

  return <div className={classes['grid-container']}>{chartList}</div>;
};

export default DisplayCategory;
