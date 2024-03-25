import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import heroImage from "../../assets/homepage/hero.jpg";
import "./HomeBanner.css";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const HomeBanner = ({ searchQuery, setSearchQuery }) => {
  const routeNames = ["Favorites"];

  const [searchClicked, setSearchClicked] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchIconClick = () => {
    setSearchQuery(searchInput);
    setSearchClicked(true);
  };
  return (
    <div>
      <Image src={heroImage} className="hero-image" />
      <div className="hero-topbar">
        <h3>Espresso</h3>
        <div className="route-options">
          {routeNames.map((x, i) => (
            <div style={{ paddingLeft: "40px" }}>
              <Link
                to={"/favorite"}
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
            to={"/searchResults"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Search
              style={{ color: "white", margin: "15px" }}
              size="20px"
              onClick={handleSearchIconClick}
            />
          </Link>
        </div>
      </div>
      <div className="hero-welcome">
        <h4>Welcome!</h4>
        <h2>
          Discover a collection of delicious coffee recipes to elevate your
          brewing experience.
        </h2>
      </div>
    </div>
  );
};
