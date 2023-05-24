import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import Card from '../UI/Card';

import classes from './Chart.module.css';

const Chart = (props) => {
  const [chartData, setChartDate] = useState(props.data);
  let chData = [];
  if (chartData) {
    chData = Object.entries(chartData).map(([key, value]) => ({
      name: key,
      value: value,
    }));
  }

  let chart = (
    <BarChart
      width={500}
      height={300}
      data={chData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="value" />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );

  return (
    <Card className={classes.chart}>
      <div className={classes.center}>
        <p>{props.name}</p>
      </div>
      {chData && <div className={classes.container}>{props.data && chart}</div>}
    </Card>
  );
};

export default Chart;
