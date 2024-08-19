import { createContext, Dispatch, ReactNode, useReducer } from "react";

import { NewCarState, NewCarAction } from "../models";

const initialState: NewCarState = {
  exteriorType: "FRONT",
  isExteriorDetailOpen: true,
  exteriorCalligraphyType: "NORMAL",
  exteriorCalligraphyColor: "brown",
  isInteriorDetailOpen: true,
  interiorCalligraphyType: "CALLIGRAPHY",
  interiorCallligraphyColor: "black",
  spaceType: "5",
  galleryType: "EXTERIOR",
};

export const NewCarStateContext = createContext<NewCarState | undefined>(
  undefined,
);

export const NewCarDispatchContext = createContext<
  Dispatch<NewCarAction> | undefined
>(undefined);

function newCarReducer(state: NewCarState, action: NewCarAction): NewCarState {
  switch (action.type) {
    case "SET_EXTERIOR_TYPE":
      return {
        ...state,
        exteriorType: action.newType,
      };
    case "SET_EXTERIOR_DETAIL_OPEN":
      return {
        ...state,
        isExteriorDetailOpen: action.isOpen,
      };
    case "SET_EXTERIOR_CALLIGRAPHY_TYPE":
      return {
        ...state,
        exteriorCalligraphyType: action.newType,
      };
    case "SET_EXTERIOR_CALLIGRAPHY_COLOR":
      return {
        ...state,
        exteriorCalligraphyColor: action.color,
      };
    case "SET_INTERIOR_DETAIL_OPEN":
      return {
        ...state,
        isInteriorDetailOpen: action.isOpen,
      };
    case "SET_INTERIOR_CALLIGRAPHY_TYPE":
      return {
        ...state,
        interiorCalligraphyType: action.newType,
      };
    case "SET_INTERIOR_CALLIGRAPHY_COLOR":
      return {
        ...state,
        interiorCallligraphyColor: action.color,
      };
    case "SET_SPACE_TYPE":
      return {
        ...state,
        spaceType: action.newType,
      };
    case "SET_GALLERY_TYPE":
      return {
        ...state,
        galleryType: action.newType,
      };
    default:
      return state;
  }
}
export function NewCarContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(newCarReducer, initialState);

  return (
    <NewCarDispatchContext.Provider value={dispatch}>
      <NewCarStateContext.Provider value={state}>
        {children}
      </NewCarStateContext.Provider>
    </NewCarDispatchContext.Provider>
  );
}
