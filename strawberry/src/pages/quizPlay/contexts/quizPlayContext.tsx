import React, { createContext, useReducer, ReactNode, Dispatch } from "react";

// 인터페이스 정의
export interface QuizPlayContextType {
  description: string;
  question: string;
  subDescription: string;
  hint: string;
  placeholder: string;
  subEventId: number | null;
  answer: string;
  isSubmitted: boolean;
}

type QuizPlayActionType =
  | { type: "SET_DESCRIPTION"; payload: string }
  | { type: "SET_QUESTION"; payload: string }
  | { type: "SET_SUB_DESCRIPTION"; payload: string }
  | { type: "SET_HINT"; payload: string }
  | { type: "SET_PLACEHOLDER"; payload: string }
  | { type: "SET_SUB_EVENT_ID"; payload: number }
  | { type: "SET_ANSWER"; payload: string }
  | { type: "SET_SUBMITTED" };

// 초기 상태
const initialState: QuizPlayContextType = {
  description: "",
  question: "",
  subDescription: "",
  hint: "",
  placeholder: "",
  subEventId: null,
  answer: "",
  isSubmitted: false,
};

// 리듀서 함수
const reducer = (
  state: QuizPlayContextType,
  action: QuizPlayActionType,
): QuizPlayContextType => {
  switch (action.type) {
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_QUESTION":
      return { ...state, question: action.payload };
    case "SET_SUB_DESCRIPTION":
      return { ...state, subDescription: action.payload };
    case "SET_HINT":
      return { ...state, hint: action.payload };
    case "SET_PLACEHOLDER":
      return { ...state, placeholder: action.payload };
    case "SET_SUB_EVENT_ID":
      return { ...state, subEventId: action.payload };
    case "SET_ANSWER":
      return { ...state, answer: action.payload };
    case "SET_SUBMITTED":
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
};

// Context 생성
export const QuizPlayStateContext = createContext<
  QuizPlayContextType | undefined
>(undefined);
export const QuizPlayDispatchContext = createContext<
  Dispatch<QuizPlayActionType> | undefined
>(undefined);

// Context Provider 컴포넌트
export const QuizPlayProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizPlayStateContext.Provider value={state}>
      <QuizPlayDispatchContext.Provider value={dispatch}>
        {children}
      </QuizPlayDispatchContext.Provider>
    </QuizPlayStateContext.Provider>
  );
};
