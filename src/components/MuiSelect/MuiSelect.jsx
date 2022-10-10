import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MuiSelect = ({newConfirmed, totalConfirmed, newDeaths}) => {
  const [cases, setCases] = useState("");

  const handleChange = (event) => {
    setCases(event.target.value);
  };
  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">Cases</InputLabel>
        <Select
          labelId="select-label"
          id="demo-simple-select"
          value={cases}
          label="Cases"
          onChange={handleChange}
        >
          <MenuItem value={newConfirmed}>newConfirmed</MenuItem>
          <MenuItem value={totalConfirmed}>totalConfirmed</MenuItem>
          <MenuItem value={newDeaths}>newDeaths</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MuiSelect;
