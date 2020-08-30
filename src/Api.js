import axios from "axios";

const Config = {
  baseURL: "http://localhost:3000/data/",
};

export const Api = {
  loadCategories: () => axios.get("categories.json", Config),
};
