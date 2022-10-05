import { Grid } from "@mui/material";

import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import GlobalStatistic from "./components/GlobalStatistic/GlobalStatistic";
import CountriesStatistic from "./components/CountriesStatistic/CountriesStatistic";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="app-sidebar">
              <Sidebar />
            </div>
          </Grid>
          <Grid className="grid-wrapper-content" item xs={9}>
            <div className="app-wrapper-content">
              <Routes>
                <Route path="/globalStatistic" element={<GlobalStatistic />} />
                <Route
                  path="/countriesStatistic"
                  element={<CountriesStatistic />}
                />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
