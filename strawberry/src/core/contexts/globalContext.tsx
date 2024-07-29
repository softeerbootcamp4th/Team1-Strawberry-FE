import { createContext, Dispatch, useReducer, ReactNode } from "react";

// User Data Types
export type UserData = {
  userId: string;
  name: string;
};

// Global State Types
export type GlobalState = {
  isLogin: boolean;
  user: UserData | undefined;
  isModalOpen: boolean;
  modalType: string;
};

// Global State Context and Dispatch
export const GlobalStateContext = createContext<GlobalState | undefined>(
  undefined,
);
export const GlobalDispatchContext = createContext<
  Dispatch<Action> | undefined
>(undefined);

// Actions
type Action =
  | { type: "LOGIN"; status: boolean }
  | { type: "LOGOUT"; status: boolean }
  | { type: "UPDATE_USER"; data: UserData }
  | { type: "CLOSE_MODAL" }
  | { type: "OPEN_QUIZ_REWARD_MODAL" };

// Reducer
function globalReducer(state: GlobalState, action: Action): GlobalState {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLogin: true };
    case "LOGOUT":
      return { ...state, isLogin: false };
    case "UPDATE_USER":
      return { ...state, user: action.data };
    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false, modalType: "" };
    case "OPEN_QUIZ_REWARD_MODAL":
      return { ...state, isModalOpen: true, modalType: "quizReward" };
    default:
      throw new Error("ACTION NOT FOUND");
  }
}

// Provider
export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(globalReducer, {
    isLogin: false,
    user: undefined,
    isModalOpen: false,
    modalType: "",
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
}
