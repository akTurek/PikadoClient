import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:5003/api",
  withCredentials: true,
});