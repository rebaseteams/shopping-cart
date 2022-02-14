import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useItem (itemsService) {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const item = itemsService.getItem(id);
    if (item) setProduct(item);
    setLoading(false);
  }, [])

  return {
    loading, product,
  }
}