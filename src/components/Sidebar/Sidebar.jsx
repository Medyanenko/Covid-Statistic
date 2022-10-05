import React from "react";
import { Link } from "react-router-dom";
import s from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <Link className={s.link} to="/globalStatistic">
          Global
        </Link>
      </div>
      <div className={s.item}>
        <Link className={s.link} to="/countriesStatistic">
          Countries
        </Link>
      </div>
      <div className={s.item}>
        <Link className={s.link} to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
