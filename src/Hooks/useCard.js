import axios from "axios";
import { useEffect, useState } from "react";

const useApp = () => {
  const [apps, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../HomeAppsData.json")
      .then((data) => setProducts(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { apps, loading, error };
};

export default useApp;
