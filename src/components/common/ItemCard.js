import React, { useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import heroImage from "../../assets/homepage/hero.jpg";
import { Link } from "react-router-dom";
import "./ItemCard.css";
import { FavoriteHeart } from "./FavoriteHeart";

export const ItemCard = ({ recipe }) => {
  return (
    <div>
      <Card className="item-card">
        <Link
          to={"/recipe/"+recipe["id"]}
          style={{ textDecoration: "none", color: "#575040" }}
        >
          <Image src={recipe["image-url"]} className="item-image" />
          <Card.Body className="item-name">{recipe["name"]}</Card.Body>
        </Link>
        <div className="item-heart">
          <FavoriteHeart size={"22px"} defaultColor={"black"} />
        </div>
      </Card>
    </div>
  );
};
