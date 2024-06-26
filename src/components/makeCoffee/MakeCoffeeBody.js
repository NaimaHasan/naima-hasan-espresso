import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import "./MakeCoffeeBody.css";
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
  const [showNoRecipesMessage, setShowNoRecipesMessage] = useState(false);
  const [showNoIngredientsMessage, setShowNoIngredientsMessage] =
    useState(false);

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

  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef.current) {
      scroll.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [targetRef]);

  const submitButtonClick = async () => {
    setSuggestedRecipes([]);
    if (
      ingredients.length === 0 &&
      temperature === "All" &&
      sugarSelected === false
    ) {
      setShowNoIngredientsMessage(true);
    } else {
      setShowNoRecipesMessage(false);
      const updatedIngredients = [...ingredients];

      if (sugarSelected === true) updatedIngredients.push("sugar");
      const recipes = await getRecipeByIngredients(
        updatedIngredients,
        temperature
      );
      if (recipes.length === 0) {
        setShowNoRecipesMessage(true);
      } else {
        setSuggestedRecipes(recipes);
        setShowNoRecipesMessage(false);

        setTimeout(() => {
          if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }, 0);
      }
    }
  };

  useEffect(() => {
    let dismissTimer;
    if (showNoRecipesMessage) {
      dismissTimer = setTimeout(() => {
        setShowNoRecipesMessage(false);
      }, 2000);
    }
    return () => clearTimeout(dismissTimer);
  }, [showNoRecipesMessage]);

  useEffect(() => {
    let dismissTimer;
    if (showNoIngredientsMessage) {
      dismissTimer = setTimeout(() => {
        setShowNoIngredientsMessage(false);
      }, 2000);
    }
    return () => clearTimeout(dismissTimer);
  }, [showNoIngredientsMessage]);

  return (
    <div>
      <Row className="no-margin">
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
          <div ref={targetRef}>
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

            <div style={{ display: "flex" }}>
              <div className="make-coffee-button" onClick={submitButtonClick}>
                Submit
              </div>

              <div
                className="make-coffee-button"
                onClick={() => {
                  setIngredients([]);
                  setSugarSelected(false);
                  setTemperature("All");
                  setSuggestedRecipes([]);
                  setShowNoRecipesMessage(false);
                }}
              >
                Clear
              </div>
            </div>
            {showNoRecipesMessage && (
              <div className="alert-heading">No suggested recipes found.</div>
            )}

            {showNoIngredientsMessage && (
              <div className="alert-heading">
                Please select some ingredients.
              </div>
            )}
            {suggestedRecipes.length !== 0 && (
              <div className="suggested-recipe-heading">Suggested Recipes:</div>
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
