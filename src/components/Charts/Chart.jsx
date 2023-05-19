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

// const data = [
//   { name: '25%', value: 2385 },
//   { name: '50%', value: 7911 },
//   { name: '75%', value: 28934 },
//   { name: 'count', value: 26072 },
//   { name: 'max', value: 9515175 },
//   { name: 'mean', value: 65275 },
//   { name: 'min', value: 1 },
//   { name: 'std', value: 327673 },
// ];

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];
const Chart = (props) => {
  const [chartData, setChartDate] = useState(props.data);
  let chData = [];
  if (chartData) {
    // console.log(dataa);
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
