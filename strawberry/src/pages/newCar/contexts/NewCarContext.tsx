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
  const newState = state;
  switch (action.type) {
    case "SET_EXTERIOR_TYPE":
      newState.exteriorType = action.newType;
      break;
    case "SET_EXTERIOR_DETAIL_OPEN":
      newState.isExteriorDetailOpen = action.isOpen;
      break;
    case "SET_EXTERIOR_CALLIGRAPHY_TYPE":
      newState.exteriorCalligraphyType = action.newType;
      break;
    case "SET_EXTERIOR_CALLIGRAPHY_COLOR":
      newState.exteriorCalligraphyColor = action.color;
      break;
    case "SET_INTERIOR_DETAIL_OPEN":
      newState.isInteriorDetailOpen = action.isOpen;
      break;
    case "SET_INTERIOR_CALLIGRAPHY_TYPE":
      newState.interiorCalligraphyType = action.newType;
      break;
    case "SET_INTERIOR_CALLIGRAPHY_COLOR":
      newState.interiorCallligraphyColor = action.color;
      break;
    case "SET_SPACE_TYPE":
      newState.spaceType = action.newType;
      break;
    case "SET_GALLERY_TYPE":
      newState.galleryType = action.newType;
      break;
  }
  return newState;
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
