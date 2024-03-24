import React, { useState } from "react";
import { CheckSquareFill, HeartFill, Square } from "react-bootstrap-icons";
import "./RecipeSteps.css";
import { Card } from "react-bootstrap";
import { CheckSquare } from "react-bootstrap-icons";

export const RecipeSteps = () => {
  const steps = [
    "Brush 10 small glasses or moulds with a little oil.",
    "To make the vanilla panna cotta, put the milk and cream in a saucepan. Add the vanilla pod and sugar. Bring slowly to the boil, then remove from the heat.",
    "Sprinkle the gelatine over and stir until the gelatine has completely dissolved. Leave to cool and infuse with the vanilla. Strain through a fine sieve into the pudding moulds. Leave until cold and starting to thicken (this will take about 45 minutes in the fridge).",
    "To make the espresso swirl, put the sugar into a small pan, add 250ml water and bring to the boil. Continue to boil until the syrup has reduced by half. Remove from the heat, add the espresso powder and gelatine and stir until the gelatine has dissolved.",
    "When the vanilla mix has thickened, remove from the fridge and drizzle the espresso syrup into each mould. Then swirl the two mixes together using the handle of a teaspoon. Chill for 2 hours or until set.",
    "Quickly dip the moulds into a bowl of hot water and turn out onto serving plates or serve them in their glasses.",
  ];
  const [isHoveredHeart, setIsHoveredHeart] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };
  return (
    <div className="step-container">
      <hr />
      <Card className="step-card">
        <div className="step-heading">Steps</div>
        <div className="step-wrapper">
          {steps.map((value, index) => (
            <div key={index} className="step-text">
              <div style={{ marginRight: "14px"}}>
              {isHeartFilled ? (
                <CheckSquareFill
                  size="18px"
                  className={isHeartFilled ? "icon-hover" : ""}
                  style={{ color: "#575040"}}
                  onClick={handleHeartClick}
                />
              ) : (
                <Square
                  size="18px"
                  className={isHoveredHeart ? "icon-hover" : ""}
                  style={{ color: isHoveredHeart ? "#575040" : "black" }}
                  onMouseEnter={() => setIsHoveredHeart(true)}
                  onMouseLeave={() => setIsHoveredHeart(false)}
                  onClick={handleHeartClick}
                />
              )}
              </div>
              {value}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
