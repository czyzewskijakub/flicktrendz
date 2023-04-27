import React, { useState, useEffect, useCallback } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

import axios from 'axios';

import Card from '../UI/Card';

import classes from './Chart.module.css';

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const Chart = (props) => {
  const [fetchData, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(props.url);
      if (!response.ok) {
        throw new Error('Some went wrong!');
      }

      const data = await response.json();
      setFetchData(data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    // axios
    //   .get(props.url)
    //   .then(function (response) {
    //     console.log(response);
    //     setFetchData(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  let chart = <p>No data provided.</p>;

  if (fetchData.length > 0) {
    const category = fetchData.map((obj) => obj.Category);
    const values = fetchData.map((obj) => obj['Average Likes']);
    const ticks = Array.from(
      { length: fetchData.length },
      (value, index) => index
    );
    // console.log(fetchData)
    chart = (
      <VictoryChart domainPadding={5} padding={{left: 80, bottom: 80}}>
        <VictoryAxis
          style={{
            ticks: { stroke: 'grey', size: 5 },
            tickLabels: { fontSize: 10, padding: 6, angle: -30, textAnchor: "end" },
          }}
        />
        <VictoryAxis dependentAxis tickFormat={(y) => y} />
        <VictoryBar data={fetchData} x="Category" y="Average Likes" />
      </VictoryChart>
    );
  }

  if (isLoading) {
    chart = <p>Loading...</p>;
  }

  return (
    <Card className={classes.chart}>
      {chart}
      {/* {fetchData.length > 0 && !isLoading && fetchData.map((data) => 
      <li key={data.Category}>{data['Average Likes']}</li>
    )} */}
    </Card>
  );
};

export default Chart;
