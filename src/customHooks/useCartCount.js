import { useContext } from "react";
import { GlobalProvider } from "../providers/context";

export function useCartCount () {
  const { value } = useContext(GlobalProvider);
  return {
    cartCount: value
  }
}