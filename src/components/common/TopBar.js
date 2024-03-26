import React, { useState } from "react";
import "./TopBar.css";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const TopBar = ({ transparent }) => {
  const routeNames = ["Home", "Favorites"];
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="topbar" style={{backgroundColor: transparent === true? "": "#575040"}}>
      <h3>Espresso</h3>
      <div className="route-options">
        {routeNames.map((x, i) => (
          <div style={{ paddingLeft: "40px" }}>
            <Link
              to={x === "Home" ? "/" : "/favorite"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h5>{x}</h5>
            </Link>
          </div>
        ))}

        <input
          className="hero-searchbar"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search"
        />
        <Link
          to={"/searchResults/"+searchInput}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Search
            style={{ color: "white", margin: "15px" }}
            size="20px"
          />
        </Link>
      </div>
    </div>
  );
};
