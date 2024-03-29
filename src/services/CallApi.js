import axios from "axios";

export const myAxios = axios.create({
  baseURL:
    process.env.REACT_APP_PROD_API === "true"
      ? process.env.REACT_APP_PROD_URL
      : process.env.REACT_APP_BASE_URL,
});

export const getRecipes = async (data) => {
  try {
    const response = await myAxios.get("recipes", {
      params: data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRecipeById = async (id) => {
  try {
    const response = await getRecipes();
    return response.filter((x) => {
      return x["id"] === id;
    })[0];
  } catch (error) {
    throw error;
  }
};

export const getRecipeByName = async (searchQuery) => {
  try {
    const response = await getRecipes();
    return response.filter((x) => {
      return x["name"].toLowerCase().includes(searchQuery.toLowerCase());
    });
  } catch (error) {
    throw error;
  }
};

export const getRecipeByCategory = async (category) => {
  try {
    const response = await getRecipes();
    if (category === "All") return response;
    return response.filter((x) => {
      return x["category"].toLowerCase().includes(category.toLowerCase());
    });
  } catch (error) {
    throw error;
  }
};

export const getFavorites = async () => {
  const favorites = localStorage.getItem("favorites");
  // console.log(favorites);

  if (!favorites) {
    const newFavorites = new Map();

    const recipes = await getRecipes();

    for (let i = 1; i <= recipes.length; i++) {
      newFavorites.set(i.toString(), false);
    }

    localStorage.setItem("favorites", JSON.stringify(Array.from(newFavorites)));

    return newFavorites;
  }
  return new Map(JSON.parse(favorites));
};

export const setFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(Array.from(favorites)));
};

export const toggleFavorite = async (id) => {
  const favorites = await getFavorites();

  setFavorites(favorites.set(id, !favorites.get(id)));
};

export const isFavorite = async (id) => {
  const favorites = await getFavorites();

  return favorites.get(id);
};

export const getRecipeByFavorite = async () => {
  try {
    const response = await getRecipes();

    const filteredResponse = await Promise.all(
      response.map(async (x) => {
        const isFav = await isFavorite(x["id"]);
        return { ...x, isFavorite: isFav };
      })
    );

    return filteredResponse.filter((x) => x.isFavorite);
  } catch (error) {
    throw error;
  }
};

export const getRecipeByIngredients = async (ingredientsList, category, sugarSelected) => {
  try {
    const recipes = await getRecipeByCategory(category);
    if (sugarSelected) {
      ingredientsList.push('sugar');
    }
    
    return recipes.filter((recipe) => {
      const ingredientNames = recipe["ingredients"].map((ingredient) =>
        ingredient["name"].toLowerCase()
      );
      return ingredientsList.every((ingredient) =>
        ingredientNames.some((ingredientName) =>
          ingredientName.includes(ingredient.toLowerCase())
        )
      );
    });
  } catch (error) {
    throw error;
  }
};
