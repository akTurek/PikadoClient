import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:5004/api",
  withCredentials: true,
});