import axios from "axios";
import { getJWT } from "../services/TokenService";

const API_BASE_URL = import.meta.env.VITE_MAIN_API;
const TOKEN = getJWT();

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const axiosInstanceNoToken = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
});
