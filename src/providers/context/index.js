import { createContext } from "react";

export const CartCount = createContext({
  count: 0,
  setCount: (n) => {},
});