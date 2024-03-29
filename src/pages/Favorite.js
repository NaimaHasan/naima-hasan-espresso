import React, { useState, useEffect } from "react";
import { TopBar } from "../components/common/TopBar";
import { Item } from "../components/common/Item";
import { getRecipeByFavorite } from "../services/CallApi";
import "./Favorite.css"

export const Favorite = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    getRecipeByFavorite()
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error("Failed to fetch recipes information:", error);
      });
  }, null);

  return (
    <div
      style={{
        backgroundColor: " #e0d9c7",
        height: "auto",
        minHeight: "100vh",
      }}
    >
      <TopBar routeName={"Favorites"} />
      <div className="favorite-text">Favorites</div>
      {recipes && <Item recipes={recipes} />}
    </div>
  );
};
