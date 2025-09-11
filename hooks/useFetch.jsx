import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../src/context/AuthContext";

const useFetch = (url) => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const { api } = useContext(AuthContext);

  useEffect(() => {
    setError(null);
    setData(null);
    let ignore = true;

    const fetchData = async () => {
      try {
        const response = await api.get(url);

        if (!ignore) {
          setData(response.data);
          setError(null);
        }
      } catch (err) {
        if (!ignore) {
          setError(err);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };
    fetchData();

    return () => {
      ignore = true;
    };
  }, [api, url]);

  return { data, loading, error };
};

export default useFetch;
