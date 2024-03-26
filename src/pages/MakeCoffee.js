import React from "react";
import { TopBar } from "../components/common/TopBar";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { MakeCoffeeIngredients } from "../components/makeCoffee/MakeCoffeeIngredients";
import { MakeCoffeeCup } from "../components/makeCoffee/MakeCoffeeCup";

export const MakeCoffee = () => {
  return (
    <div
      style={{
        backgroundColor: " #e0d9c7",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "105vh",
      }}
    >
      <TopBar home={false} />
      <Container style={{margin: "0px"}}>
        <Row>
          <Col style={{padding: "0px"}} xs={12} md={6} xl={6} className="d-flex flex-column">
            <MakeCoffeeCup />
          </Col>

          <Col xs={12} md={6} xl={6} className="d-flex flex-column">
            <MakeCoffeeIngredients />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
