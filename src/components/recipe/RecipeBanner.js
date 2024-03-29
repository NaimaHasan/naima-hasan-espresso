import React from "react";
import { Dot } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./RecipeBanner.css";
import { FavoriteHeart } from "../common/FavoriteHeart";

export const RecipeBanner = ({recipe}) => {
  return (
    <Container className="m-0">
      <Row className="justify-content-center" style={{padding: "20px"}}>
        <Col md={"auto"} className="d-flex flex-column align-items-center">
          <Card className="recipe-card">
            <Image src={recipe["image-url"]} className="recipe-image" />
            <div className="recipe-heart">
              <FavoriteHeart id={recipe["id"]} size={"22px"} defaultColor={"black"}/>
            </div>
            <Card.Body className="recipe-category">
              Category: {recipe["category"]}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={12} lg={12} xl={6} className="d-flex flex-column flex-grow-1">
          <div className="recipe-name">{recipe["name"]}</div>
          <div className="recipe-quote">
            {recipe["description"]}
          </div>
          <div className="recipe-ingredients-heading">Ingredients</div>
          <div className="recipe-ingredients-list">
            {recipe["ingredients"].map((ingredient) => (
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
