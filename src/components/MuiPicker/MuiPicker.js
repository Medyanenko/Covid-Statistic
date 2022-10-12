import React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Box from "@mui/material/Box/Box";

const MuiPicker = ({value, setValue}) => {


  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: "from", end: "to" }}
    >
      <DateRangePicker
      disableFuture
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
};

export default MuiPicker;
