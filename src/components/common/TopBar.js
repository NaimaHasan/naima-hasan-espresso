import React from "react";
import "./TopBar.css";
import { Search } from "react-bootstrap-icons";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const TopBar = () => {
    const routeNames = ["Home", "Favorites"];
  return (
    <div className="topbar" style={{backgroundColor: " #575040"}}>
      <h3>Espresso</h3>
      <div className="route-options">
        {routeNames.map((x, i) => (
          <div style={{ paddingLeft: "40px" }}>
            {/* <Link to={x === "Home" ? "/homePage" : "/favorite"}>{x}</Link> */}
            {x}
          </div>
        ))}

        <input className="searchbar" />
        <Search style={{ color: "white", margin: "15px" }} size="20px" />
      </div>
    </div>
  );
};
