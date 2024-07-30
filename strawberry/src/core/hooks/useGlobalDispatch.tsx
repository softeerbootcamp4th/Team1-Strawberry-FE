import { useContext } from "react";
import { GlobalDispatchContext } from "../contexts/globalContext";

export function useGlobalDispatch() {
  const dispatch = useContext(GlobalDispatchContext);
  if (!dispatch) throw new Error("Global Dispatch Context Provider Not Found");
  return dispatch;
}
