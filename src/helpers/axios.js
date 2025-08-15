import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://88.200.63.148:8146/api",
  //baseURL: "http://localhost:5000/api",
  withCredentials: true,
});
