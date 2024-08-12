import React, { createContext, useReducer, ReactNode, Dispatch } from "react";

import { DrawingPlayState, DrawingPlayAction } from "../models";

// 초기 상태
const initialState: DrawingPlayState = {
  isGuideOpen: false,
  guideIndex: 0,
  stage: 1,
  totalStage: 3,
  status: "onBoarding",
  canvasImg: "",
  timeLimit: 7,
  isDrawing: false,
};

// 리듀서 함수
const drawingPlayReducer = (
  state: DrawingPlayState,
  action: DrawingPlayAction,
): DrawingPlayState => {
  switch (action.type) {
    case "SET_GUIDE_OPEN":
      return { ...state, isGuideOpen: action.payload };
    case "SET_GUIDE_INDEX":
      return { ...state, guideIndex: action.payload };
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
  DrawingPlayState | undefined
>(undefined);

export const DrawingPlayDispatchContext = createContext<
  Dispatch<DrawingPlayAction> | undefined
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
