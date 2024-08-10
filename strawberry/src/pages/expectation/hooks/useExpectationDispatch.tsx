import { useContext } from "react";

import { ExpectationDispatchContext } from "../contexts/expectationContext";

export function useExpectationDispatch() {
  const dispatch = useContext(ExpectationDispatchContext);
  if (!dispatch)
    throw new Error("Expectation Dispatch Context Provider Not Found");
  return dispatch;
}
