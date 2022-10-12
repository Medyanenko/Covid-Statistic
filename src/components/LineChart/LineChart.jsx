import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import s from "./LineChart.module.css"
const LineChartGlobal = ({data}) => {
  return (
    <LineChart
      width={930}
      height={350}
      data={data}
      margin={{ top: 0, right: 30, left: 60, bottom: 55 }}
      className={s.lineCtartBlock} 
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="cases" stroke="#8884d8" />
    </LineChart>
  );
};

export default LineChartGlobal;
