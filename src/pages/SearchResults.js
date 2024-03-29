import React from "react";
import { TopBar } from "../components/common/TopBar";
import { Item } from "../components/common/Item";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRecipeByName } from "../services/CallApi";
import "./SearchResults.css"

export const SearchResults = () => {
  const { searchQuery } = useParams();
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    getRecipeByName(searchQuery)
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error("Failed to fetch recipes information:", error);
      });
  }, null);
  
  return (
    <div style={{ backgroundColor: " #e0d9c7", height: "auto", minHeight: "100vh" }}>
      <TopBar routeName={"Search Results"} />
      <div className="search-results-text">Search Results</div>
      {recipes && <Item recipes={recipes}/>}
    </div>
  );
};
