import React, { useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "./MakeCoffeeRecipeCard.css";
import { FavoriteHeart } from "../common/FavoriteHeart";

export const MakeCoffeeRecipeCard = ({ recipe }) => {
  return (
    <div>
      <Card className="make-coffee-recipe-card">
        <Link
          to={"/recipe/"+recipe["id"]}
          style={{ textDecoration: "none", color: "#575040" }}
        >
          <Image src={recipe["image-url"]} className="make-coffee-recipe-image" />
          <Card.Body className="make-coffee-recipe-name">{recipe["name"]}</Card.Body>
        </Link>
        <div className="make-coffee-recipe-heart">
          <FavoriteHeart id={recipe["id"]} size={"20px"} defaultColor={"black"} />
        </div>
      </Card>
    </div>
  )
}
