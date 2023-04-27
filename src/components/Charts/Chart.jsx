import React, { useState, useEffect, useCallback } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

import Spinner from 'react-bootstrap/Spinner';

import Card from '../UI/Card';

import classes from './Chart.module.css';

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
    // const category = fetchData.map((obj) => obj.Category);
    // const values = fetchData.map((obj) => obj['Average Likes']);
    // const ticks = Array.from(
    //   { length: fetchData.length },
    //   (value, index) => index
    // );
    chart = (
      <VictoryChart
          domainPadding={{x: 20, y:10}}
          // domainPadding={{left: 20, right: 20}}
          padding={{ left: 80, bottom: 105 }}
      >
        <VictoryAxis
            label="Category name"
            style={{
            ticks: { stroke: 'grey', size: 5 },
            tickLabels: {
              fontSize: 10,
              padding: 6,
              angle: -30,
              textAnchor: 'end',
            },
            axisLabel: {padding: 75},
          }}
          padding={{ top: 20, bottom: 60 }}
        />
        <VictoryAxis
            dependentAxis
            tickFormat={(y) => y}
        />
        <VictoryBar
            style={{
                data: {
                    fill: ({ index }) => +index % 2 === 0  ? "#4a14a2" : "#1631a9",
                    stroke: "#000000",
                    fillOpacity: 0.7,
                    strokeWidth: 2
                }
            }}
            data={fetchData} x="Category" y={props.y}
        />
      </VictoryChart>
    );
  }

  if (isLoading) {
    chart = <Spinner animation="border" />;
  }

  return (
    <Card className={classes.chart}>
      <div className={classes.container}>
        {!isLoading && <p>{props.title}</p>}
        {chart}
      </div>
    </Card>
  );
};

export default Chart;
