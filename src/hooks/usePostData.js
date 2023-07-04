import axios from "axios";
import { useState, useEffect } from "react";

const useAxiosPost = (url, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .post(url, payload)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url, payload]);

  return { data, error, loading };
};
export default useAxiosPost;
