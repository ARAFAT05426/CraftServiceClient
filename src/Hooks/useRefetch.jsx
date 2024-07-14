import { useState, useEffect } from "react";
<<<<<<< HEAD
import axios from "axios";

const useRefetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}${url}`, {withCredentials: true});
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
=======

const UseRefetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toggle, setToggle] = useState(false);

  const fetchData = async (http) => {
    setLoading(true);
    try {
      const response = await fetch(http);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData)
    } catch (error) {
>>>>>>> 72ce20db5515d37913fd439385769b38cf6f14f8
      setError(error);
    } finally {
      setLoading(false);
    }
<<<<<<< HEAD
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useRefetch;
=======
  }
  useEffect(() =>{
    fetchData(url)
  }, [toggle, url])
  const refetch = () =>{
    return setToggle(!toggle)
  }
  return { data, loading, error, refetch };
};

export default UseRefetch;
>>>>>>> 72ce20db5515d37913fd439385769b38cf6f14f8
