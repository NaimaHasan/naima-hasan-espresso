import React, { useEffect, useState } from "react";
import { RecipeBanner } from "../components/recipe/RecipeBanner";
import { RecipeSteps } from "../components/recipe/RecipeSteps";
import { TopBar } from "../components/common/TopBar";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../services/CallApi";
import backgroundImage from "../assets/homepage/hero.jpg";
import { Card } from "react-bootstrap";
import "./Recipe.css"

export const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getRecipeById(id)
      .then((data) => {
        setRecipe(data);
      })
      .catch((error) => {
        console.error("Failed to fetch recipes information:", error);
      });
  }, null);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: 'auto',
        padding: '220px 0px 100px 0px',
      }}
    >
      <TopBar routeName={"Recipe"} />
      <Card className="recipe-container" style={{backgroundColor: "#e0d9c7"}}>
        {recipe && (
          <RecipeBanner
            recipe = {recipe}
          />
        )}
        {recipe && <RecipeSteps steps={recipe.steps} />}
      </Card>
    </div>
  );
};
