import axios from "axios";

// const URL_PATH = "http://10.58.0.83:8000/";

const Config = {
  baseURL: "http://localhost:3000/data/",
};

export const Api = {
  loadCategories: () => axios.get("categories.json", Config),
};
