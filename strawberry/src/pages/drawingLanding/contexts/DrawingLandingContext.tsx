import { createContext, Dispatch, ReactNode, useReducer } from "react";

import { DrawingLandingState, DrawingLandingAction } from "../models";

const initialState: DrawingLandingState = {
  drawingLandingData: undefined,
};

export const DrawingLandingStateContext = createContext<
  DrawingLandingState | undefined
>(undefined);

export const DrawingLandingDispatchContext = createContext<
  Dispatch<DrawingLandingAction> | undefined
>(undefined);

function drawingLandingReducer(
  state: DrawingLandingState,
  action: DrawingLandingAction,
): DrawingLandingState {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, drawingLandingData: action.data };
    default:
      throw new Error("ACTION NOT FOUND");
  }
}

export function DrawingLandingContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(drawingLandingReducer, initialState);

  return (
    <DrawingLandingDispatchContext.Provider value={dispatch}>
      <DrawingLandingStateContext.Provider value={state}>
        {children}
      </DrawingLandingStateContext.Provider>
    </DrawingLandingDispatchContext.Provider>
  );
}
