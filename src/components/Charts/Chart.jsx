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
          const jsonData = await response.json();
          const jsonDataY = jsonData[props.y];
          const chartData = Object.keys(jsonDataY).map((key) => ({
              x: key,
              y: jsonDataY[key]
          }));
          // console.log("chartData: " + chartData.toString());
          setFetchData(chartData);
      } catch (error) {
          console.log(JSON.stringify(error));
      }
      setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  let chart = <p>No data provided.</p>;

  if (fetchData.length > 0) {
      chart = (
          <VictoryChart
              domainPadding={{x: 20, y:10}}
              padding={{ left: 80, bottom: 105 }}
              scale={{y: "sqrt"}}
          >
              <VictoryAxis
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
                  // padding={{ top: 20, bottom: 60 }}
                  dependentAxis
                  tickFormat={(tick) => `${tick}`}
              />
              <VictoryAxis
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
                  data={fetchData}
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
