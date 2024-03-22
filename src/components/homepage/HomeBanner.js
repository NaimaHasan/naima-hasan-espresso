import React from "react";
import Image from "react-bootstrap/Image";
import heroImage from "../../assets/homepage/hero.jpg";
import "./HomeBanner.css";

export const HomeBanner = () => {
  return (
    <div>
      <Image src={heroImage} className="hero-image-style" />
      <div style={{position: "fixed", top: "0", right: "0"}}>
        <h1>Stacked Content</h1>
        <p>This content is stacked on top of the image.</p>
      </div>
    </div>
  );
};
