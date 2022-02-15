import { useState, useEffect } from "react";
export function useCartCount (cartService) {
  const [ cartCount, setCartCount ] = useState(0);
    useEffect(() => {
      const count = cartService.getCount();
      setCartCount(count);
    }, []);

  return {
    cartCount
  }
}