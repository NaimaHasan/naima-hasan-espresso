import "./App.css";
import { useState, useEffect } from "react";
import { getRecipes } from "./services/CallApi";
import { Favorite } from "./pages/Favorite";
import { Home } from "./pages/Home";
import { Recipe } from "./pages/Recipe";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState("Default");

  useEffect(() => {
    getRecipes()
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error("Failed to fetch recipes:", error);
      });
  }, []);

  const filteredRecipes = recipes
  .filter((recipe) => {
    if (filter === "Hot Coffee") {
      return recipe.category === "Hot coffee";
    } else if (filter === "Cold Coffee") {
      return recipe.category === "Cold coffee";
    } else if (filter === "Dessert") {
      return recipe.category === "Dessert";
    } else {
      return true;
    }
  })
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home recipes={filteredRecipes} filter={filter} setFilter={setFilter}/>} />
          <Route path="/favorite" element={<Favorite filter={filter} setFilter={setFilter}/>} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;