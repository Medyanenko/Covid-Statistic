import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MuiSelect = ({cases, handleChange}) => {

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
          <MenuItem value='NewConfirmed'>newConfirmed</MenuItem>
          <MenuItem value='TotalConfirmed'>totalConfirmed</MenuItem>
          <MenuItem value='NewDeaths'>newDeaths</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MuiSelect;
