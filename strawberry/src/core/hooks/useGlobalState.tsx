import { useContext } from "react";
import { GlobalStateContext } from "../../../core/contexts/globalContext";

export function useGlobalState() {
  const state = useContext(GlobalStateContext);
  if (!state) throw new Error("Global State Context Provider Not Found");
  return state;
}
