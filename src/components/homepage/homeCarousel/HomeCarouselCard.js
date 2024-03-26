import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./HomeCarouselCard.css";
import { Link } from "react-router-dom";
import { FavoriteHeart } from "../../common/FavoriteHeart";

export const HomeCarouselCard = ({ recipe }) => {
  return (
    <div>
      <Card className="carousel-card" style={{ backgroundColor: "#e0d9c7" }}>
        <Link
          to={"/recipe/" + recipe["id"]}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div>
            <Image src={recipe["image-url"]} className="carousel-card-image" rounded />
            <div className="gradient-overlay"></div>
            <Card.Body className="carousel-card-title">{recipe["name"]}</Card.Body>
          </div>
        </Link>
        <div className="carousel-card-heart">
          <FavoriteHeart size={"18px"} defaultColor={"white"}/>
        </div>
      </Card>
    </div>
  );
};
