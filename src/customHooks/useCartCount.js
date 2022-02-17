import { useContext } from "react";
import { CartCount } from "../providers/context";

export function useCartCount () {
  const { value } = useContext(CartCount);
  return {
    cartCount: value
  }
}