import { createContext } from "react";

export const GlobalProvider = createContext({
  count: 0,
  setCount: (n) => {},
});