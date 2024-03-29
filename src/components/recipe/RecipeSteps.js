import React, { useState } from "react";
import { CheckSquareFill, Square } from "react-bootstrap-icons";
import "./RecipeSteps.css";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

export const RecipeSteps = ({ steps }) => {
  const [checkStates, setCheckStates] = useState(steps.map(() => false));

  const handleCheckClick = (index) => {
    const newCheckStates = [...checkStates];
    newCheckStates[index] = !newCheckStates[index];
    setCheckStates(newCheckStates);
  };

  return (
    <Container className="m-0">
      <Row>
        <Col xs={12} md={12} xl={12} className="d-flex flex-column">
          <div className="step-container">
            <Card className="step-card">
              <div className="step-heading">Steps</div>
              <div className="step-wrapper">

                {steps.map((step, index) => (
                  <div className="step-text" key={index}>
                    <div style={{ marginRight: "14px" }}>
                      {checkStates[index] ? (
                        <CheckSquareFill
                          className="icon-hover step-check"
                          style={{ color: "#575040" }}
                          onClick={() => handleCheckClick(index)}
                        />
                      ) : (
                        <Square
                          className="icon-hover step-check"
                          style={{ color: "black" }}
                          onClick={() => handleCheckClick(index)}
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
