import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import s from "./MuiSelect.module.css"
const MuiSelect = ({cases, handleChange}) => {

  return (
    <Box sx={{ width: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">cases</InputLabel>
        <Select
          labelId="select-label"
          id="demo-simple-select"
          value={cases}
          label="cases"
          onChange={handleChange}
          className={s.SelectInput}
        >
          <MenuItem value='NewConfirmed'>New confirmed</MenuItem>
          <MenuItem value='TotalConfirmed'>Total confirmed</MenuItem>
          <MenuItem value='NewDeaths'>New deaths</MenuItem>
          <MenuItem value='TotalDeaths'>Total deaths</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MuiSelect;
