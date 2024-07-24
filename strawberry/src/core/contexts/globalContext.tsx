import { createContext, Dispatch, useReducer } from "react";

export type UserData = {
  userId: string;
  name: string;
};

export type GlobalState = {
  isLogin: boolean;
  user: UserData | undefined;
};

export const GlobalStateContext = createContext<GlobalState | undefined>(
  undefined,
);

type Action =
  | { type: "UPDATE"; data: UserData }
  | { type: "LOGIN"; status: boolean }
  | { type: "LOGOUT"; status: boolean };

type GlobalDispatch = Dispatch<Action>;
export const GlobalDispatchContext = createContext<GlobalDispatch | undefined>(
  undefined,
);

function globalReducer(state: GlobalState, action: Action): GlobalState {
  const newState = state;

  switch (action.type) {
    case "LOGIN":
      newState.isLogin = true;
      break;
    case "LOGOUT":
      newState.isLogin = false;
      break;
    case "UPDATE":
      newState.user = action.data;
      break;
    default:
      throw new Error("ACTION NOT FOUND");
  }

  return newState;
}

export function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [globalState, dispatch] = useReducer(globalReducer, {
    isLogin: false,
    user: undefined,
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={globalState}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
}
