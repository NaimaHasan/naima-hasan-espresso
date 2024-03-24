import React, { useEffect, useState } from "react";
import { RecipeBanner } from "../components/recipe/RecipeBanner";
import { RecipeSteps } from "../components/recipe/RecipeSteps";
import { TopBar } from "../components/common/TopBar";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../services/CallApi";

export const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipes] = useState(null);

  useEffect(() => {
    getRecipeById(id)
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error("Failed to fetch recipes information:", error);
      });
  }, null);

  return (
    <div style={{ backgroundColor: " #e0d9c7", minHeight: "200vh" }}>
      <TopBar />
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
      {recipe && <RecipeSteps steps={recipe.steps}/>}
    </div>
  );
};
