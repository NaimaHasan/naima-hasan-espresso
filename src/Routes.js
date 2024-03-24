import React from "react";
import { Home } from "./pages/Home"; 
import { Favorite } from "./pages/Favorite";
import { Recipe } from "./pages/Recipe";
import { Routes, Route, Navigate } from "react-router-dom";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/homePage" element={<Home />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/recipe" element={<Recipe />} />
    </Routes>
  );
};

export default AppRoutes;