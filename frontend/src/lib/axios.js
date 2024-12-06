import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "devolopment" ? "http://localhost:5001/api" : "/api",
  withCredentials: true,
});
