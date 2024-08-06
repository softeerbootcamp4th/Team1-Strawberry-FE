import { createContext, Dispatch, ReactNode, useReducer } from "react";

import { QuizLandingState, QuizLandingAction } from "../models";

const initialState: QuizLandingState = {
  quizLandingData: undefined,
};

export const QuizLandingStateContext = createContext<
  QuizLandingState | undefined
>(undefined);

export const QuizLandingDispatchContext = createContext<
  Dispatch<QuizLandingAction> | undefined
>(undefined);

function quizLandingReducer(
  state: QuizLandingState,
  action: QuizLandingAction,
): QuizLandingState {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, quizLandingData: action.data };
    default:
      throw new Error("ACTION NOT FOUND");
  }
}

export function QuizLandingContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(quizLandingReducer, initialState);

  return (
    <QuizLandingDispatchContext.Provider value={dispatch}>
      <QuizLandingStateContext.Provider value={state}>
        {children}
      </QuizLandingStateContext.Provider>
    </QuizLandingDispatchContext.Provider>
  );
}
