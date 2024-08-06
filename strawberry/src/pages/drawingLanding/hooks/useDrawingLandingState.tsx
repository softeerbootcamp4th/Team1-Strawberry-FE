import { useContext } from "react";

import { DrawingLandingStateContext } from "../contexts/DrawingLandingContext";

export function useDrawingLandingState() {
  const state = useContext(DrawingLandingStateContext);
  if (!state)
    throw new Error("Drawing Landing State Context Provider Not Found");
  return state;
}
