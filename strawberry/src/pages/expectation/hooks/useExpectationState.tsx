import { useContext } from "react";

import { ExpectationStateContext } from "../contexts/expectationContext";

export function useExpectationState() {
  const state = useContext(ExpectationStateContext);
  if (!state) throw new Error("Expectation State Context Provider Not Found");
  return state;
}
