import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const apiRef = useRef(
    axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: { "Content-Type": "application/json" },
    })
  );

  useEffect(() => {
    const interceptor = apiRef.current.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return () => {
      apiRef.current.interceptors.request.eject(interceptor);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ token, setToken, api: apiRef.current, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
