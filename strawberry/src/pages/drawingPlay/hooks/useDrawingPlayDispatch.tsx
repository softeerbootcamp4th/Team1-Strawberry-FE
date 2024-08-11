import { useContext } from "react";
import { DrawingPlayDispatchContext } from "../contexts/drawingPlayContext";

export function useDrawingPlayDispatch() {
  const dispatch = useContext(DrawingPlayDispatchContext);
  if (!dispatch)
    throw new Error("Drawing Play Dispatch Context Provider Not Found");
  return dispatch;
}
