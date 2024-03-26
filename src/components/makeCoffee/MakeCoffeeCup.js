import React from "react";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import heroImage from "../../assets/homepage/hero.jpg";
import "./MakeCoffeeCup.css"

export const MakeCoffeeCup = () => {
  return (
    <Card className="make-coffee-card">
      <Image src={heroImage} className="make-coffee-image" />
    </Card>
  );
};
