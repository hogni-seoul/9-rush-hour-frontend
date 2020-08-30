import axios from "axios";

const Config = {
  baseURL: "http://localhost:3000/data/",
};

const Api = {
  loadCategories: () => axios.get("categories.json", Config),
  loadStores: () => axios.get("stores.json", Config),
};

export default Api;
