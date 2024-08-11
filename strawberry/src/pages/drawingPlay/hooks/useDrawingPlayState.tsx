import { useContext } from "react";
import { DrawingPlayStateContext } from "../contexts/drawingPlayContext";

export function useDrawingPlayState() {
  const state = useContext(DrawingPlayStateContext);
  if (!state) throw new Error("Drawing Play State Context Provider Not Found");
  return state;
}
