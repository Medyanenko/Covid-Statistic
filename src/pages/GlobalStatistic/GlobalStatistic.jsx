import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MuiPicker from "../../components/MuiPicker/MuiPicker";
import MuiSelect from "../../components/MuiSelect/MuiSelect";
import LineChartGlobal from "../../components/LineChart/LineChart";
import s from "./GlobalStatistic.module.css"

const GlobalStatistic = () => {
  const [WorldWipItems, setWorldWipItems] = useState([]);
  const [value, setValue] = useState([null, null]);
  const [cases, setCases] = useState("");

  const handleChange = (event) => {
    setCases(event.target.value);
  };
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

  const keys = ["Date", cases];
  const dataTest = WorldWipItems.map((n) =>
    Object.fromEntries(keys.map((k) => [k, n[k]]))
  );

  function byField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  }

  dataTest.sort(byField("Date"));

  const data = dataTest.map((data) => ({
    date: data.Date.slice(5, 10).replace(/(..)-(..)?/g, "$2-$1"),
    cases: data[cases],
  }));

  return (
    <div>
      <div className={s.selectedBlock}>
      <MuiPicker value={value} setValue={setValue} />
      <MuiSelect cases={cases} handleChange={handleChange} />
      </div>
      {cases ? <LineChartGlobal data={data} /> : ""}
    </div>
  );
};

export default GlobalStatistic;
