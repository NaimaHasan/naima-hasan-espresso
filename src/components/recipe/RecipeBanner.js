import React, { useState } from "react";
import { Heart, HeartFill, Dot } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import heroImage from "../../assets/homepage/hero.jpg";
import "./RecipeBanner.css";

export const RecipeBanner = ({title, id, category, description, imageUrl, ingredients}) => {
  const [isHoveredHeart, setIsHoveredHeart] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  // const ingredients = {
  //   "Sunflower Oil": "for brushing",
  //   "Full-Fat Milk": "375ml",
  //   "Double Cream": "375ml",
  //   "Vanilla Pod": "½",
  //   "Golden Caster Sugar": "100g",
  //   "Powdered Gelatine": "2 tsp",
  //   "Soft Light Brown Sugar": "3 tbsp",
  //   "Instant Espresso Coffee Powder": "2 tsp",
  // };

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} xl={5} className="d-flex flex-column">
          <Card className="recipe-card">
            <Image src={imageUrl} className="recipe-image" />
            <div className="recipe-heart">
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
            <Card.Body className="recipe-category">
              Category: {category}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={11} md={6} xl={6} className="d-flex flex-column">
          <div className="recipe-name">{title}</div>
          <div className="recipe-quote">
            {description}
          </div>
          <div className="recipe-ingredients-heading">Ingredients</div>
          <div className="recipe-ingredients-list">
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                <Dot size="44px" style={{flex: "0 0 auto"}}/>
                <span>
                  {ingredient.name}: {ingredient.quantity} {ingredient.optional ? "(optional)" : ""}
                </span>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
