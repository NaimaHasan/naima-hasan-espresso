import React, { useState } from "react";
import "./TopBar.css";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const TopBar = ({ routeName }) => {
  const routeNames = ["Home", "Favorites"];
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div
      className="topbar"
      style={{
        backgroundColor: routeName === "Home" ? "" : "#575040",
        position: routeName === "Home" ? "absolute" : "fixed",
      }}
    >
      <h3>Espresso</h3>
      <div className="route-options">
        {routeNames.map((x, i) => (
          <div style={{ paddingLeft: "40px" }}>
            {routeName !== x ? (
              <Link
                to={x === "Home" ? "/" : "/favorite"}
                className="route-option-item"
              >
                {x}
              </Link>
            ) : (
              ""
            )}
          </div>
        ))}

        <input
          className="hero-searchbar"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search"
        />
        <Link
          to={"/searchResults/" + searchInput}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Search style={{ color: "white", margin: "15px" }} size="20px" />
        </Link>
      </div>
    </div>
  );
};
