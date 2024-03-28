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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      window.location.href = "/searchResults/" + searchInput;
    }
  };

  return (
    <div>
      <div
        className="topbar"
        style={{
          backgroundColor: routeName === "Home" ? "" : "#575040",
          position: routeName === "Home" ? "absolute" : "fixed",
        }}
      >
        <div className="app-name">Espresso</div>
        <div className="route-options">
          {routeNames.map((x, i) => (
            <div>
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
            className="searchbar"
            value={searchInput}
            onChange={handleSearchInputChange}
            placeholder="Search"
            onKeyDown={handleKeyDown}
          />
          <Link
            to={"/searchResults/" + searchInput}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Search className="search-icon" />
          </Link>
        </div>
      </div>
      <input
        className="searchbar-mobile"
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder="Search"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
