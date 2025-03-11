import axios from "axios";

// old approach
// axios.defaults.baseURL = REACT_APP_BASE_URL + ':' + REACT_APP_PORT;

// const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost";
// const REACT_APP_PORT = process.env.REACT_APP_PORT || "3030";

const baseURL =
  process.env.NODE_ENV === "development"
    ? `${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}`
    : `${process.env.REACT_APP_BASE_URL}/api`;

export const API_ENDPOINTS = {
  POSTS: "posts",
  PROFILE: "profile",
  FRIENDS: "friends",
  USERS: "users",
};

export const apiClient = axios.create({
  // baseURL: `${REACT_APP_BASE_URL}:${REACT_APP_PORT}`,
  baseURL,
});

apiClient.interceptors.request.use(
  (config) => {
    // Modify request config here (e.g., add headers)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    // Modify response here
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
