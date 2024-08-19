import { useContext } from "react";

import { NewCarDispatchContext } from "../contexts/NewCarContext";

export function useNewCarDispatch() {
  const dispatch = useContext(NewCarDispatchContext);
  if (!dispatch) throw new Error("NewCar Dispatch Context Provider Not Found");
  return dispatch;
}
