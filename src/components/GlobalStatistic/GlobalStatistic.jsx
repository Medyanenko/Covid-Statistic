import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MuiPicker from "./../MuiPicker/MuiPicker";

const GlobalStatistic = (props) => {
  const [WorldWipItems, setWorldWipItems] = useState([]);
  const [value, setValue] = useState([null, null]);
  console.log(value);

  useEffect(() => {
    async function getData(from, to) {
      try {
        const worldWipResponse = await axios.get(
          `https://api.covid19api.com/world?from=${from}T00:00:00Z&to=${to}T00:00:00Z`
        );
        setWorldWipItems(worldWipResponse.data);
      } catch (error) {
        console.error("error data request");
      }
    }
    if (value.every((elem) => elem !== null)) {
      const date = value.map((elem) => JSON.stringify(elem.$d).slice(1, 11));
      getData(date[0], date[1]);
    }
  }, [value]);
  const newConfirmed = WorldWipItems.map((item) => item.NewConfirmed);
  const TotalConfirmed = WorldWipItems.map((item) => item.TotalConfirmed);
  const NewDeaths = WorldWipItems.map((item) => item.NewDeaths);

  return (
    <div>
      <MuiPicker value={value} setValue={setValue} />
      <p>{newConfirmed}</p>
      <p>{TotalConfirmed}</p>
      <p>{NewDeaths}</p>
    </div>
  );
};

export default GlobalStatistic;
