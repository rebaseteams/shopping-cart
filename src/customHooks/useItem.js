import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

export function useItem (itemsService, provider) {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const { setCount, value } = useContext(provider);

  useEffect(() => {
    setLoading(true);
    const item = itemsService.getItem(id);
    if (item) setProduct(item);
    setLoading(false);
  }, [])

  return {
    loading, product, setCount, value
  }
}