import React, { createContext, useReducer, ReactNode } from "react";
import { Dispatch } from "react";

// 타입 정의
export interface ExpectationType {
  name: string;
  comment: string;
}

export interface ExpectationContextType {
  nowPage: number;
  totalPage: number;
  bannerImg: string;
  expectationList: ExpectationType[];
}

export type ExpectationActionType =
  | { type: "SET_NOW_PAGE"; payload: number }
  | { type: "SET_TOTAL_PAGE"; payload: number }
  | { type: "SET_EXPECTATION_LIST"; payload: ExpectationType[] }
  | { type: "SET_BANNER_IMG"; payload: string };

// 초기 상태
const initialState: ExpectationContextType = {
  nowPage: 1,
  totalPage: 1,
  bannerImg: "",
  expectationList: [],
};

// 리듀서 함수
const reducer = (
  state: ExpectationContextType,
  action: ExpectationActionType,
): ExpectationContextType => {
  switch (action.type) {
    case "SET_NOW_PAGE":
      return { ...state, nowPage: action.payload };
    case "SET_TOTAL_PAGE":
      return { ...state, totalPage: action.payload };
    case "SET_EXPECTATION_LIST":
      return { ...state, expectationList: action.payload };
    case "SET_BANNER_IMG":
      return { ...state, bannerImg: action.payload };
  }
};

export const ExpectationStateContext = createContext<
  ExpectationContextType | undefined
>(undefined);

export const ExpectationDispatchContext = createContext<
  Dispatch<ExpectationActionType> | undefined
>(undefined);

// Context Provider 컴포넌트
export const ExpectationContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ExpectationStateContext.Provider value={state}>
      <ExpectationDispatchContext.Provider value={dispatch}>
        {children}
      </ExpectationDispatchContext.Provider>
    </ExpectationStateContext.Provider>
  );
};
