import { useEffect, useState } from "react";
import axios from "axios";

export type User = {
  id: number;
  name: string;
};

export const useFetchUsers = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequest();
  }, []);

  const fetchRequest = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/items");
      setData(res.data);
      setLoading(false);
      setError(null);
    } catch (e) {
      console.log(e);
      setLoading(false);
      if (axios.isAxiosError(e)) {
        setError(e.message);
      }
    }
  };

  return { data, loading, error };
};
