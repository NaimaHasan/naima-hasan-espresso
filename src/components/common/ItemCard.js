import React, { useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import heroImage from "../../assets/homepage/hero.jpg";
import { Link } from "react-router-dom";
import "./ItemCard.css";

export const ItemCard = ({ id, title, imageUrl }) => {
  const [isHoveredHeart, setIsHoveredHeart] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div>
      <Card className="item-card">
        <Link
          to={"/recipe/"+id}
          style={{ textDecoration: "none", color: "#575040" }}
        >
          <Image src={imageUrl} className="item-image" />
          <Card.Body className="item-name">{title}</Card.Body>
        </Link>
        <div className="item-heart">
          {isHeartFilled ? (
            <HeartFill
              size="22px"
              className={isHeartFilled ? "icon-hover" : ""}
              style={{ color: "red" }}
              onClick={handleHeartClick}
            />
          ) : (
            <Heart
              size="22px"
              className={isHoveredHeart ? "icon-hover" : ""}
              style={{ color: isHoveredHeart ? "red" : "black" }}
              onMouseEnter={() => setIsHoveredHeart(true)}
              onMouseLeave={() => setIsHoveredHeart(false)}
              onClick={handleHeartClick}
            />
          )}
        </div>
      </Card>
    </div>
  );
};
