import React, { createContext, useReducer, ReactNode } from "react";
import { Dispatch } from "react";

// 타입 정의
type StageType = 1 | 2 | 3 | number;
type StatusType = "onBoarding" | "game" | "result" | "finish";

interface DrawingPlayContextType {
  stage: StageType;
  totalStage: number;
  status: StatusType;
  canvasImg: string;
  timeLimit: number;
  isDrawing: boolean;
}

type ActionType =
  | { type: "SET_NEXT_STAGE" }
  | { type: "SET_TOTAL_STAGE"; payload: number }
  | { type: "SET_ON_BOARDING" }
  | { type: "SET_GAME" }
  | { type: "SET_RESULT" }
  | { type: "SET_FINISH" }
  | { type: "SET_CANVAS_IMG"; payload: string }
  | { type: "SET_START_DRAWING" }
  | { type: "SET_FINISH_DRAWING" };

// 초기 상태
const initialState: DrawingPlayContextType = {
  stage: 1,
  totalStage: 3,
  // status: "finish",
  status: "onBoarding",
  canvasImg: "",
  timeLimit: 7,
  isDrawing: false,
};

// 리듀서 함수
const drawingPlayReducer = (
  state: DrawingPlayContextType,
  action: ActionType,
): DrawingPlayContextType => {
  switch (action.type) {
    case "SET_NEXT_STAGE":
      return { ...state, stage: state.stage + 1 };
    case "SET_TOTAL_STAGE":
      return { ...state, totalStage: action.payload };
    case "SET_ON_BOARDING":
      return { ...state, status: "onBoarding" };
    case "SET_GAME":
      return { ...state, status: "game" };
    case "SET_RESULT":
      return { ...state, status: "result" };
    case "SET_FINISH":
      return { ...state, status: "finish" };
    case "SET_CANVAS_IMG":
      return { ...state, canvasImg: action.payload };
    case "SET_START_DRAWING":
      return { ...state, isDrawing: true };
    case "SET_FINISH_DRAWING":
      return { ...state, isDrawing: false };
    default:
      return state;
  }
};

export const DrawingPlayStateContext = createContext<
  DrawingPlayContextType | undefined
>(undefined);

export const DrawingPlayDispatchContext = createContext<
  Dispatch<ActionType> | undefined
>(undefined);

// Context Provider 컴포넌트
export const DrawingPlayProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(drawingPlayReducer, initialState);

  return (
    <DrawingPlayDispatchContext.Provider value={dispatch}>
      <DrawingPlayStateContext.Provider value={state}>
        {children}
      </DrawingPlayStateContext.Provider>
    </DrawingPlayDispatchContext.Provider>
  );
};
