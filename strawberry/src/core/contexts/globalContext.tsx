import {
  createContext,
  Dispatch,
  useReducer,
  ReactNode,
  useEffect,
} from "react";

// User Data Types
export type UserData = {
  userId: string;
  name: string;
};

type ModalCategoryType = "TWO_BUTTON" | "ONE_BUTTON" | "PROGRESS" | null;

type ModalPropsType = {
  title?: string;
  imgPath?: string;
  info?: string;
  whiteBtnContent?: string;
  primaryBtnContent?: string;
  onWhiteBtnClick?: () => void;
  onPrimaryBtnClick?: () => void;
  enter?: boolean;
} | null;

// Global State Types
export type GlobalState = {
  isLogin: boolean;
  user: UserData | undefined;
  isModalOpen: boolean;
  modalCategory: ModalCategoryType;
  modalProps: ModalPropsType;
  isToastOpen: boolean;
  toastContent: string;
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
  | { type: "SET_LOGIN"; status: boolean }
  | { type: "UPDATE_USER"; data: UserData }
  | {
    type: "OPEN_MODAL";
    modalCategory: ModalCategoryType;
    modalProps: ModalPropsType;
  }
  | {
    type: "CLOSE_MODAL";
  }
  | {
    type: "OPEN_TOAST";
    toastContent: string;
  }
  | {
    type: "CLOSE_TOAST";
  };

// Reducer
function globalReducer(state: GlobalState, action: Action): GlobalState {
  switch (action.type) {
    case "SET_LOGIN":
      return { ...state, isLogin: action.status };
    case "UPDATE_USER":
      return { ...state, user: action.data };
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
        modalCategory: action.modalCategory,
        modalProps: action.modalProps,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
        modalCategory: null,
        modalProps: null,
      };
    case "OPEN_TOAST":
      return {
        ...state,
        isToastOpen: true,
        toastContent: action.toastContent,
      };
    case "CLOSE_TOAST":
      return {
        ...state,
        isToastOpen: false,
      };
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
    modalCategory: null,
    modalProps: null,
    isToastOpen: false,
    toastProps: null,
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    dispatch({ type: "SET_LOGIN", status: accessToken !== null });
  }, []);

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
}

// 사용법
// globalDispatch?.({
//   type: "OPEN_MODAL",
//   modalCategory: "twoButton",
//   modalProps: {
//     title: "모달 제목",
//     imgPath: "/path/to/image.png",
//     info: "모달 정보",
//     whiteBtnContent: "취소",
//     primaryBtnContent: "확인",
//     onWhiteBtnClick: () => console.log("취소 클릭"),
//     onPrimaryBtnClick: () => console.log("확인 클릭"),
//   },
// });
