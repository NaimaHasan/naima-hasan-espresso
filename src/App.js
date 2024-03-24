import "./App.css";
import { Favorite } from "./pages/Favorite";
import { Home } from "./pages/Home";
import { Recipe } from "./pages/Recipe";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/recipe" element={<Recipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;