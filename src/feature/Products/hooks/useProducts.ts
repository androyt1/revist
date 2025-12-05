import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { type Product } from "../components/types";

const useProducts = () => {
  const [products, setPoducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        const json = await response.json();
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        setPoducts(json);
      } catch (error) {
        console.log(error as string);
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return { loading, error, products };
};

export { useProducts };
