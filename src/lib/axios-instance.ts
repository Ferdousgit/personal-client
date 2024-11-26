import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "https://portfolio-lyp-server.vercel.app/api/v1",
  baseURL: "http://localhost:4000/api/v1",
});
