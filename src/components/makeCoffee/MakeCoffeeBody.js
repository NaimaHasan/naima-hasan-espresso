import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./MakeCoffeeBody.css";
import { Link } from "react-router-dom";
import { Item } from "../../components/common/Item";
import { getRecipeByIngredients } from "../../services/CallApi";
import { MakeCoffeeIngredients } from "./MakeCoffeeIngredients";
import { MakeCoffeeTemperature } from "./MakeCoffeeTemperature";
import { MakeCoffeeImage } from "./MakeCoffeeImage";
import { MakeCoffeeRecipe } from "./MakeCoffeeRecipe";

export const MakeCoffeeBody = () => {
  const [ingredients, setIngredients] = useState([]);
  const [temperature, setTemperature] = useState("All");
  const [sugarSelected, setSugarSelected] = useState(false);
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);

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
          xs={12}
          md={5}
          xl={5}
          className="make-coffee-column1 d-flex flex-column"
        >
          <MakeCoffeeImage
            isTemperatureSelected={isTemperatureSelected}
            sugarSelected={sugarSelected}
            ingredients={ingredients}
          />
        </Col>

        <Col
          xs={12}
          md={7}
          xl={7}
          className="make-coffee-column2 d-flex flex-column"
        >
          <div>
            <MakeCoffeeTemperature
              isTemperatureSelected={isTemperatureSelected}
              toggleTemperature={toggleTemperature}
            />
            <MakeCoffeeIngredients
              toggleIngredient={toggleIngredient}
              isIngredientSelected={isIngredientSelected}
              setSugarSelected={setSugarSelected}
              sugarSelected={sugarSelected}
            />
            <div
              className="make-coffee-button"
              onClick={() => {
                setIngredients([]);
                setSugarSelected(false);
                setTemperature("All");
              }}
            >
              Clear Ingredients
            </div>
            <div className="make-coffee-top-text">
              Press the submit button to see the what can be made with the
              selected ingredients. <br /> Press the clear button to clear the
              suggested recipes.
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="make-coffee-button"
                onClick={async () => {
                  const recipes = await getRecipeByIngredients(
                    ingredients,
                    temperature
                  );
                  setSuggestedRecipes(recipes);
                }}
              >
                Submit
              </div>
              <div
                className="make-coffee-button"
                onClick={() => setSuggestedRecipes([])}
              >
                Clear
              </div>
            </div>

            {suggestedRecipes.length !== 0 && (
              <div className="suggested-recipe-heading">
                Suggested Recipes:
              </div>
            )}
            <div>
              {suggestedRecipes.length !== 0 && (
                <MakeCoffeeRecipe recipes={suggestedRecipes} />
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
