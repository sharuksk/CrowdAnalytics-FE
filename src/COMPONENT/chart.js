import * as React from 'react';
import "./chart.css"
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import {linkNode} from "../nodelink";
import axios from "axios";
import {useState, useEffect } from 'react';




export default function Chart() {
  const [dataset, setDataset] = useState([]);
  useEffect(() =>{
    gettingChartData();
  }, []);

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

  const gettingChartData = async() => {
    await axios.post(`${linkNode}/chartdata`).then(async (res) => {
      try{
        let fromData = res.data;
        let toData = [];
        for (let i = 0; i < fromData.length; i++) {
            toData.push({
              date: fromData[i]._id,
              personin: fromData[i].total_count_IN,
              personout: fromData[i].total_count_OUT,
              total: fromData[i].total_CROWD,
            });
          }
          setDataset(toData);
      }
      catch{
        console.log("problem in dataset assigning")
      }
    })
  }
  // const dataset = [
  //   {
  //     personIn: 59,
  //     personOut: 57,
  //     Total: 86,
  //     Timestamp: 21,
  //     month: 'Jan',
  //   },
  //   {
  //     personIn: 50,
  //     personOut: 52,
  //     Total: 78,
  //     Timestamp: 28,
  //     month: 'Fev',
  //   },
  //   {
  //     personIn: 47,
  //     personOut: 53,
  //     Total: 106,
  //     Timestamp: 41,
  //     month: 'Mar',
  //   },
  //   {
  //     personIn: 54,
  //     personOut: 56,
  //     Total: 92,
  //     Timestamp: 73,
  //     month: 'Apr',
  //   },
  //   {
  //     personIn: 57,
  //     personOut: 69,
  //     Total: 92,
  //     Timestamp: 99,
  //     month: 'May',
  //   },
  //   {
  //     personIn: 60,
  //     personOut: 63,
  //     Total: 103,
  //     Timestamp: 144,
  //     month: 'June',
  //   },
  //   {
  //     personIn: 59,
  //     personOut: 60,
  //     Total: 105,
  //     Timestamp: 319,
  //     month: 'July',
  //   },
  //   {
  //     personIn: 65,
  //     personOut: 60,
  //     Total: 106,
  //     Timestamp: 249,
  //     month: 'Aug',
  //   },
  //   {
  //     personIn: 51,
  //     personOut: 51,
  //     Total: 95,
  //     Timestamp: 131,
  //     month: 'Sept',
  //   },
  //   {
  //     personIn: 60,
  //     personOut: 65,
  //     Total: 97,
  //     Timestamp: 55,
  //     month: 'Oct',
  //   },
  //   {
  //     personIn: 67,
  //     personOut: 64,
  //     Total: 76,
  //     Timestamp: 48,
  //     month: 'Nov',
  //   },
  //   {
  //     personIn: 61,
  //     personOut: 70,
  //     Total: 103,
  //     Timestamp: 25,
  //     month: 'Dec',
  //   },
  // ];



  const valueFormatter = (value) => `${value} peoples`;

  return (
    <>
    <div className='chart'>
    <h1>Crowd Analytics</h1>
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'date' }]}
      series={[
        { dataKey: 'personin', label: 'PersonIn', valueFormatter },
        { dataKey: 'personout', label: 'PersonOut', valueFormatter },
        { dataKey: 'total', label: 'TotalCrowd', valueFormatter },
      ]}
      {...chartSetting}
    />
    </div>
    </>
  );
}
