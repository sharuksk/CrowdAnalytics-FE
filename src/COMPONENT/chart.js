import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import {linkNode} from "../nodelink";
import axios from "axios";
import {useState} from 'react';



const chartSetting = {
  yAxis: [
    {
      label: '',
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-0px, 0)',
    },
  },
};
const dataset = [
  {
    personIn: 59,
    personOut: 57,
    Total: 86,
    Timestamp: 21,
    month: 'Jan',
  },
  {
    personIn: 50,
    personOut: 52,
    Total: 78,
    Timestamp: 28,
    month: 'Fev',
  },
  {
    personIn: 47,
    personOut: 53,
    Total: 106,
    Timestamp: 41,
    month: 'Mar',
  },
  {
    personIn: 54,
    personOut: 56,
    Total: 92,
    Timestamp: 73,
    month: 'Apr',
  },
  {
    personIn: 57,
    personOut: 69,
    Total: 92,
    Timestamp: 99,
    month: 'May',
  },
  {
    personIn: 60,
    personOut: 63,
    Total: 103,
    Timestamp: 144,
    month: 'June',
  },
  {
    personIn: 59,
    personOut: 60,
    Total: 105,
    Timestamp: 319,
    month: 'July',
  },
  {
    personIn: 65,
    personOut: 60,
    Total: 106,
    Timestamp: 249,
    month: 'Aug',
  },
  {
    personIn: 51,
    personOut: 51,
    Total: 95,
    Timestamp: 131,
    month: 'Sept',
  },
  {
    personIn: 60,
    personOut: 65,
    Total: 97,
    Timestamp: 55,
    month: 'Oct',
  },
  {
    personIn: 67,
    personOut: 64,
    Total: 76,
    Timestamp: 48,
    month: 'Nov',
  },
  {
    personIn: 61,
    personOut: 70,
    Total: 103,
    Timestamp: 25,
    month: 'Dec',
  },
];



const valueFormatter = (value) => `${value} vehicles`;

export default function Chart() {
  return (
    <>
    <h1>Vehicle Count Area Wise</h1>
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'personIn', label: 'personIn', valueFormatter },
        { dataKey: 'personOut', label: 'personOut', valueFormatter },
        { dataKey: 'Total', label: 'Total', valueFormatter },
        { dataKey: 'Timestamp', label: 'Timestamp', valueFormatter },
      ]}
      {...chartSetting}
    />
    </>
  );
}
