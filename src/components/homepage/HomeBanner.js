import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import heroImage from "../../assets/homepage/hero.jpg";
import { Link } from "react-router-dom";
import "./HomeBanner.css";
import { TopBar } from "../common/TopBar";
import { Button } from "react-bootstrap";

export const HomeBanner = () => {
  return (
    <div>
      <Image src={heroImage} className="hero-image" />
      <TopBar home={true} />
      <div className="hero-welcome">
        <h4>Welcome!</h4>
        <h2>
          Discover a collection of delicious coffee recipes to elevate your
          brewing experience.
        </h2>
        <Link
          to={"/makeCoffee"}
          style={{ textDecoration: "none", color: "black"}}
        >
          <div className="make-coffee">Make Your Own Coffee</div>
        </Link>
      </div>
    </div>
  );
};
