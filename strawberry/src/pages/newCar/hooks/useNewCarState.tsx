import { useContext } from "react";

import { NewCarStateContext } from "../contexts/NewCarContext";

export function useNewCarState() {
  const state = useContext(NewCarStateContext);
  if (!state) throw new Error("NewCar State Context Provider Not Found");
  return state;
}
