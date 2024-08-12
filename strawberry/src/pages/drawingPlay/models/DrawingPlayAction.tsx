export type DrawingPlayAction =
  | { type: "SET_GUIDE_OPEN"; payload: boolean }
  | { type: "SET_GUIDE_INDEX"; payload: number }
  | { type: "SET_NEXT_STAGE" }
  | { type: "SET_TOTAL_STAGE"; payload: number }
  | { type: "SET_ON_BOARDING" }
  | { type: "SET_GAME" }
  | { type: "SET_RESULT" }
  | { type: "SET_FINISH" }
  | { type: "SET_CANVAS_IMG"; payload: string }
  | { type: "SET_START_DRAWING" }
  | { type: "SET_FINISH_DRAWING" };
