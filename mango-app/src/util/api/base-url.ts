import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4001/api/users", //point to backend port
  headers: {
    "Content-Type": "application/json",
  },
});
