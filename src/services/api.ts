import axios from "axios";
import.meta.env;

console.log(import.meta.env.VITE_URL);

export const api = axios.create({
  baseURL: import.meta.env.VITE_URL,
});
