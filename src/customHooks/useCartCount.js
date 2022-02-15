import { useState, useEffect } from "react";
export function useCartCount (cartService) {
  const [ cartCount, serCartCount ] = useState(0);
    useEffect(() => {
      const cart = cartService.getCartItems();
      let count = 0;
      for (let i = 0; i < cart.length ; i++) {
        count = cart[i].quantity;
      }
      serCartCount(count);
    }, []);

  return {
    cartCount
  }
}