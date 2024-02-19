import { useEffect, useState } from "react";

const useJsonFetch = (
  url: string,
  opts: string
): [{ status: string } | null, boolean, { message: string } | null] => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${opts}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [url, opts]);

  return [data, loading, error];
};

export default useJsonFetch;
