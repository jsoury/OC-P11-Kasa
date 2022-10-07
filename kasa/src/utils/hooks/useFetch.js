import { useState, useEffect } from "react";

export function useFetch(url, id) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);
        let data = await response.json();
        data = id ? data.find((hosting) => hosting.id === id) : data;
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url, id]);
  return { isLoading, data, error };
}
