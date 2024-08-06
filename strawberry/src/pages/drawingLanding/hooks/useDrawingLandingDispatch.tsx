import { useContext } from "react";

import { DrawingLandingDispatchContext } from "../contexts/DrawingLandingContext";

export function useDrawingLandingDispatch() {
  const dispatch = useContext(DrawingLandingDispatchContext);
  if (!dispatch)
    throw new Error("Drawing Landing Dispatch Context Provider Not Found");
  return dispatch;
}
