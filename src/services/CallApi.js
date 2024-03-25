import axios from "axios";

export const myAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

export const getRecipes = async (data) => {
  try {
    const response = await myAxios.get('recipes', {
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

  export const getRecipeByName = async (name) => {
    try {
      const response = await getRecipes();
      return response.filter((x) => {
        return x["name"] === name;
      })[0];
    } catch (error) {
      throw error;
    }
  };

  export const getRecipeByCategory = async (category) => {
    try {
      const response = await getRecipes();
      return response.filter((x) => {
        return x["category"] === category;
      })[0];
    } catch (error) {
      throw error;
    }
  };