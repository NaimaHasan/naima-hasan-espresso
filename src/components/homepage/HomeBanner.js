import React from "react";
import Image from "react-bootstrap/Image";
import heroImage from "../../assets/homepage/hero.jpg";
import "./HomeBanner.css";
import { Search } from "react-bootstrap-icons";

export const HomeBanner = () => {
  const routeNames = ["Home", "Favorites"];
  return (
    <div>
      <Image src={heroImage} className="hero-image" />
      <div className="hero-topbar">
        <h3>Espresso</h3>
        <div className="route-options">
          {routeNames.map((x, i) => (
            <div style={{ paddingLeft: "40px" }}>
              <h5>{x}</h5>
            </div>
          ))}

          <input className="hero-searchbar" />
          <Search style={{ color: "white", margin: "15px" }} size="20px" />
        </div>
      </div>
      <div className="hero-welcome">
        <h4>Welcome!</h4>
        <h2>Discover a collection of delicious coffee recipes to elevate your brewing experience.</h2>
      </div>
    </div>
  );
};
