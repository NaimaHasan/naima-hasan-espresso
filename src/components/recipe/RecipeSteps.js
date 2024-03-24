import React, { useState } from "react";
import { CheckSquareFill, HeartFill, Square } from "react-bootstrap-icons";
import "./RecipeSteps.css";
import { Card } from "react-bootstrap";
import { CheckSquare } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";

export const RecipeSteps = ({steps}) => {
  const [isHoveredCheck, setIsHoveredCheck] = useState(false);
  const [isCheckFilled, setIsCheckFilled] = useState(false);

  const handleCheckClick = ({steps}) => {
    setIsCheckFilled(!isCheckFilled);
  };
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} xl={12} className="d-flex flex-column">
          <div className="step-container">
            <Card className="step-card">
              <div className="step-heading">Steps</div>
              <div className="step-wrapper">
                {steps.map((step) => (
                  <div className="step-text">
                    <div style={{ marginRight: "14px" }}>
                      {isCheckFilled ? (
                        <CheckSquareFill
                          size="18px"
                          className={isCheckFilled ? "icon-hover" : ""}
                          style={{ color: "#575040" }}
                          onClick={handleCheckClick}
                        />
                      ) : (
                        <Square
                          size="18px"
                          className={isHoveredCheck ? "icon-hover" : ""}
                          style={{
                            color: isHoveredCheck ? "#575040" : "black",
                          }}
                          onMouseEnter={() => setIsHoveredCheck(true)}
                          onMouseLeave={() => setIsHoveredCheck(false)}
                          onClick={handleCheckClick}
                        />
                      )}
                    </div>
                    {step.description}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};