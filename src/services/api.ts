import axios from "axios";
import.meta.env.VITE_URL;

const baseURL = import.meta.env.DEV ? "http://localhost:3333" : "/api";

console.log(baseURL);

export const api = axios.create({
  baseURL: baseURL,
});
