import axios from "axios";
import { useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => {
    api.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  });

  return (
    <AuthContext.Provider value={{ token, setToken, api, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
