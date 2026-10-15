
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(() => {
    const cashData = localStorage.getItem(url)

    return cashData ? JSON.parse(cashData) : null;
    
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = url.replace(/\/+$/, "");

  // GET
  useEffect(() => {

    const getData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  useEffect(() => {
    if(data !== null){
      localStorage.setItem(url , JSON.stringify(data))
    }
  },[url , data])

  // POST
  const post = async (newPost) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result = await response.json();

      setData((prevData) => [...prevData, result]);

      return result;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // PUT
  const put = async (newPost, id) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result = await response.json();

      setData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, ...result } : item
        )
      );

      return result;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // DELETE
  const del = async (id) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      setData((prevData) =>
        prevData.filter((item) => item.id !== id)
      );
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    post,
    put,
    del,
  };
}
