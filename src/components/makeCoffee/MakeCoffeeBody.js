import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { CupHot, CupStraw } from "react-bootstrap-icons";
import Image from "react-bootstrap/Image";
import "./MakeCoffeeBody.css";

import backgroundImage from "../../assets/makeCoffee/background.png";
import foregroundImage from "../../assets/makeCoffee/foreground.png";
import ice from "../../assets/makeCoffee/ice.png";
import sugar from "../../assets/makeCoffee/sugar.png";
import smoke from "../../assets/makeCoffee/smoke.png";

import bottomCaramel from "../../assets/makeCoffee/bottom-caramel.png";
import bottomCream from "../../assets/makeCoffee/bottom-cream.png";
import bottomEspresso from "../../assets/makeCoffee/bottom-espresso.png";
import bottomMilk from "../../assets/makeCoffee/bottom-milk.png";

import mid1Caramel from "../../assets/makeCoffee/mid1-caramel.png";
import mid1Cream from "../../assets/makeCoffee/mid1-cream.png";
import mid1Espresso from "../../assets/makeCoffee/mid1-espresso.png";
import mid1Milk from "../../assets/makeCoffee/mid1-milk.png";

import mid2Caramel from "../../assets/makeCoffee/mid2-caramel.png";
import mid2Cream from "../../assets/makeCoffee/mid2-cream.png";
import mid2Espresso from "../../assets/makeCoffee/mid2-espresso.png";
import mid2Milk from "../../assets/makeCoffee/mid2-milk.png";

import topCaramel from "../../assets/makeCoffee/top-caramel.png";
import topCream from "../../assets/makeCoffee/top-cream.png";
import topEspresso from "../../assets/makeCoffee/top-espresso.png";
import topMilk from "../../assets/makeCoffee/top-milk.png";
import {
  getRecipeByCategory,
  getRecipeByIngredients,
} from "../../services/CallApi";

export const MakeCoffeeBody = () => {
  const [ingredients, setIngredients] = useState([]);
  const [temperature, setTemperature] = useState("All");
  const [sugarSelected, setSugarSelected] = useState(false);
  const ingredientsList = ["Espresso", "Milk", "Caramel", "Cream"];
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);

  const ingredientImages = [
    {
      Espresso: bottomEspresso,
      Milk: bottomMilk,
      Caramel: bottomCaramel,
      Cream: bottomCream,
    },
    {
      Espresso: mid1Espresso,
      Milk: mid1Milk,
      Caramel: mid1Caramel,
      Cream: mid1Cream,
    },
    {
      Espresso: mid2Espresso,
      Milk: mid2Milk,
      Caramel: mid2Caramel,
      Cream: mid2Cream,
    },
    {
      Espresso: topEspresso,
      Milk: topMilk,
      Caramel: topCaramel,
      Cream: topCream,
    },
  ];

  const toggleIngredient = (ingredient) => {
    if (ingredients.includes(ingredient)) {
      setIngredients(ingredients.filter((item) => item !== ingredient));
    } else {
      setIngredients([...ingredients, ingredient]);
    }
  };

  const isIngredientSelected = (ingredient) => ingredients.includes(ingredient);

  const toggleTemperature = (temp) => {
    if (temperature === temp) {
      setTemperature("All");
    } else {
      setTemperature(temp);
    }
  };

  const isTemperatureSelected = (temp) => temperature === temp;

  return (
    <div>
      <Row>
        <Col
          style={{
            backgroundColor: "#624f45",
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
          xs={12}
          md={5}
          xl={5}
          className="d-flex flex-column"
        >
          <div>
            <Image src={backgroundImage} className="make-coffee-image" />
            {ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient">
                <img
                  src={ingredientImages[index][ingredient]}
                  alt={ingredient}
                  className="make-coffee-image"
                />
              </div>
            ))}
            {isTemperatureSelected("Hot") && (
              <Image src={smoke} className="make-coffee-smoke" />
            )}
            {isTemperatureSelected("Cold") && (
              <Image src={ice} className="make-coffee-image" />
            )}
            {sugarSelected && (
              <Image src={sugar} className="make-coffee-image" />
            )}
            <Image src={foregroundImage} className="make-coffee-image" />
          </div>
        </Col>

        <Col
          xs={12}
          md={7}
          xl={7}
          className="d-flex flex-column"
          style={{
            backgroundColor: "#e0d9c7",
            minHeight: "100vh",
            alignItems: "center",
            paddingTop: "180px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "20px",
                paddingBottom: "30px",
                fontWeight: "200",
              }}
            >
              Press the submit button to see the what can be made with the
              selected ingredients. <br /> Press the clear button to clear the
              suggested recipes.
            </div>
            <div style={{ fontSize: "22px" }}>
              What kind of coffee do you want?
            </div>
            <div style={{ display: "flex" }}>
              <div
                className={
                  isTemperatureSelected("Hot")
                    ? "temp-button temp-button-selected"
                    : "temp-button"
                }
                onClick={() => toggleTemperature("Hot")}
              >
                Hot
                <CupHot size="28px" style={{ marginLeft: "50px" }} />
              </div>
              <div
                className={
                  isTemperatureSelected("Cold")
                    ? "temp-button temp-button-selected"
                    : "temp-button"
                }
                onClick={() => toggleTemperature("Cold")}
              >
                Cold
                <CupStraw size="28px" style={{ marginLeft: "50px" }} />
              </div>
            </div>
            <div style={{ fontSize: "22px", padding: "50px 20px 0px 0px" }}>
              Pick your ingredients
            </div>
            <div style={{ display: "flex" }}>
              {ingredientsList.map((ingredient, index) => (
                <div
                  key={index}
                  className={
                    isIngredientSelected(ingredient)
                      ? "ingredient-button ingredient-button-selected"
                      : "ingredient-button"
                  }
                  onClick={() => toggleIngredient(ingredient)}
                >
                  {ingredient}
                </div>
              ))}

              <div
                className={
                  sugarSelected
                    ? "ingredient-button ingredient-button-selected"
                    : "ingredient-button"
                }
                onClick={() => setSugarSelected(!sugarSelected)}
              >
                Sugar
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="submit-button"
                onClick={async () => {
                  const recipes = await getRecipeByIngredients(
                    ingredients,
                    temperature
                  );
                  console.log(recipes);
                  setSuggestedRecipes(recipes);
                }}
              >
                Submit
              </div>
              <div
                className="submit-button"
                onClick={() => setSuggestedRecipes([])}
              >
                Clear
              </div>
            </div>
            {suggestedRecipes.length != 0 && (
              <div style={{ fontSize: "22px", padding: "50px 20px 0px 0px" }}>
                Suggested Recipes:
              </div>
            )}
            {suggestedRecipes &&
              suggestedRecipes.map((recipe, index) => (
                <div key={index} className="ingredient-button">
                  {recipe["name"]}
                </div>
              ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};
