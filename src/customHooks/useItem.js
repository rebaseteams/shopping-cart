/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

export function useItem (itemsService, provider) {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');

  const { id } = useParams();

  const { setCount, value } = useContext(provider);

  useEffect(() => {
    setLoading(true);
    const item = itemsService.getItem(id);
    if (item) {
      setProduct(item);
      setImage(item.images[0]);
    }
    setLoading(false);
  }, [id])

  return {
    loading, product, setCount, value, setImage, image
  }
}