import React, { useEffect, useState } from "react";
import { RecipeBanner } from "../components/recipe/RecipeBanner";
import { RecipeSteps } from "../components/recipe/RecipeSteps";
import { TopBar } from "../components/common/TopBar";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../services/CallApi";
import Image from "react-bootstrap/Image";
import backgroundImage from "../assets/homepage/hero.jpg";
import { Card } from "react-bootstrap";

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
        height: '220vh',
      }}
    >
      <TopBar home={false}/>
      <Card style={{top: "220px", margin: "0px 200px", paddingBottom: "100px", backgroundColor: "#e0d9c7"}}>
        {recipe && (
          <RecipeBanner
            title={recipe.name}
            id={recipe.id}
            category={recipe.category}
            description={recipe.description}
            imageUrl={recipe["image-url"]}
            ingredients={recipe.ingredients}
          />
        )}
        {recipe && <RecipeSteps steps={recipe.steps} />}
      </Card>
    </div>
  );
};
