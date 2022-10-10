import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MuiPicker from "../../components/MuiPicker/MuiPicker";
import MuiSelect from "../../components/MuiSelect/MuiSelect";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const GlobalStatistic = (props) => {
  const [WorldWipItems, setWorldWipItems] = useState([]);
  const [value, setValue] = useState([null, null]);

  useEffect(() => {
    async function getData(from, to) {
      try {
        const worldWipResponse = await axios.get(
          `https://api.covid19api.com/world?from=${from}T00:00:00Z&to=${to}T00:00:00Z`
        );
        setWorldWipItems(worldWipResponse.data);
        console.log("data", worldWipResponse.data)
        
  const dataTest = worldWipResponse.data[0].Date
  console.logdataTest(dataTest)
      } catch (error) {
        console.error("error data request");
      }
    }
    if (value.every((elem) => elem !== null)) {
      const date = value.map((elem) => JSON.stringify(elem.$d).slice(1, 11));
      getData(date[0], date[1]);
      const dateStart = new Date(date[0])
      , dateEnd = new Date(date[1])
      , result = []
    ;
    
    function pad(s){ return ('00' + s).slice(-2)}
    
    while( dateStart.getTime() < dateEnd.getTime()) {
      result.push( pad(dateStart.getMonth()+1) +'-'+ pad(dateStart.getDate()));
      dateStart.setDate( dateStart.getDate()+1);
    }
      console.log("1", result);
    }
  }, [value]);
  const newConfirmed = WorldWipItems.map((item) => item.NewConfirmed);
  const totalConfirmed = WorldWipItems.map((item) => item.TotalConfirmed);
  const newDeaths = WorldWipItems.map((item) => item.NewDeaths);
  console.log(newConfirmed);
  


   

  

  return (
    <div>
      <MuiPicker value={value} setValue={setValue} />
      <MuiSelect
        newConfirmed={newConfirmed}
        totalConfirmed={totalConfirmed}
        newDeaths={newDeaths}
      />
      <LineChart
        width={730}
        height={250}
        data={newConfirmed}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default GlobalStatistic;
