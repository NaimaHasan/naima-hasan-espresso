import "./App.css";
import { useState, useEffect } from "react";
import { getRecipes } from "./services/CallApi";
import { Favorite } from "./pages/Favorite";
import { Home } from "./pages/Home";
import { Recipe } from "./pages/Recipe";
import { SearchResults } from "./pages/SearchResults";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getRecipes()
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error("Failed to fetch recipes:", error);
      });
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    if (filter !== "All" && recipe.category !== filter) {
      return false;
    }
    if (
      searchQuery &&
      !recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const searchedRecipes = recipes.filter((recipe) => {
    if (
      searchQuery &&
      !recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                recipes={filteredRecipes}
                filter={filter}
                setFilter={setFilter}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            }
          />
          <Route
            path="/favorite"
            element={
              <Favorite
                filter={filter}
                setFilter={setFilter}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            }
          />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route
            path="/searchResults"
            element={
              <SearchResults
                searchedRecipes={searchedRecipes}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
