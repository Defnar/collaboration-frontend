import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // create axios instance onceSS
  const apiRef = useRef(
    axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: { "Content-Type": "application/json" },
    })
  );

  useMemo(() => {
    apiRef.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return () => {
      apiRef.current.interceptors.request.eject(interceptor);
    };
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        api: apiRef.current,
        user,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
