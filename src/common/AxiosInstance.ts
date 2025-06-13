import axios from "axios";
import { getJWT } from "../services/TokenService";

// Loading state management
let loadingCounter = 0;
let loadingState: { setIsLoading: (isLoading: boolean) => void } = {
  setIsLoading: () => {}
};

export const setLoadingStateManager = (stateManager: { setIsLoading: (isLoading: boolean) => void }) => {
  loadingState = stateManager;
};

const showLoading = () => {
  loadingCounter++;
  loadingState.setIsLoading(true);
};

const hideLoading = () => {
  loadingCounter--;
  if (loadingCounter <= 0) {
    loadingCounter = 0;
    loadingState.setIsLoading(false);
  }
};

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

// Add request interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    showLoading();
    return config;
  },
  (error) => {
    hideLoading();
    return Promise.reject(error);
  }
);

// Add response interceptors
axiosInstance.interceptors.response.use(
  (response) => {
    hideLoading();
    return response;
  },
  (error) => {
    hideLoading();
    return Promise.reject(error);
  }
);

// Also add interceptors for axiosInstanceNoToken
axiosInstanceNoToken.interceptors.request.use(
  (config) => {
    showLoading();
    return config;
  },
  (error) => {
    hideLoading();
    return Promise.reject(error);
  }
);

axiosInstanceNoToken.interceptors.response.use(
  (response) => {
    hideLoading();
    return response;
  },
  (error) => {
    hideLoading();
    return Promise.reject(error);
  }
);
