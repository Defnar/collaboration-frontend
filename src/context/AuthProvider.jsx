import axios from "axios";
import { useState } from "react";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  api.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return (
    <AuthContext.Provider value={{ token, setToken, api }}>
      {children}
    </AuthContext.Provider>
  );
};
