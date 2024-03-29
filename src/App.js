import "./App.css";
import { useState, useEffect } from "react";
import { getRecipes } from "./services/CallApi";
import { Favorite } from "./pages/Favorite";
import { Home } from "./pages/Home";
import { Recipe } from "./pages/Recipe";
import { SearchResults } from "./pages/SearchResults";
import { AllRecipes } from "./pages/AllRecipes";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { MakeCoffee } from "./pages/MakeCoffee";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState("All");

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
              />
            }
          />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route
            path="/searchResults/:searchQuery"
            element={<SearchResults />}
          />
          <Route
            path="/allRecipes"
            element={
              <AllRecipes
                filter={filter}
                setFilter={setFilter}
                recipes={filteredRecipes}
              />
            }
          />
        </Route>
        <Route path="/makeCoffee" element={<MakeCoffee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
