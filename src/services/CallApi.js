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