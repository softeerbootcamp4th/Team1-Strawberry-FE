import { createContext, Dispatch, ReactNode, useReducer } from "react";

import { NewCarState, NewCarAction } from "../models";

const initialState: NewCarState = {
  exteriorType: "FRONT",
  exteriorDetailIndex: undefined,
  exterionDetailCarouselIndex: 0,
  exteriorCalligraphyType: "NORMAL",
  exteriorCalligraphyColor: "BROWN",
  interiorDetailIndex: undefined,
  interiorDetailCarouselIndex: 0,
  interiorCalligraphyType: "NORMAL",
  interiorCalligraphyColor: "BLACK",
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
        exteriorDetailIndex: 0,
      };
    case "SET_EXTERIOR_DETAIL_INDEX":
      return {
        ...state,
        exteriorDetailIndex: action.index,
        exterionDetailCarouselIndex: 0,
      };
    case "SET_EXTERIOR_DETAIL_CAROUSEL_INDEX":
      return { ...state, exterionDetailCarouselIndex: action.index };
    case "SET_EXTERIOR_CALLIGRAPHY_TYPE":
      return {
        ...state,
        exteriorCalligraphyType: action.newType,
        exteriorCalligraphyColor:
          action.newType === "NORMAL" ? "BROWN" : "WHITEPEARL",
      };
    case "SET_EXTERIOR_CALLIGRAPHY_COLOR":
      return {
        ...state,
        exteriorCalligraphyColor: action.color,
      };
    case "SET_INTERIOR_DETAIL_INDEX":
      return {
        ...state,
        interiorDetailIndex: action.index,
        interiorDetailCarouselIndex: 0,
      };
    case "SET_INTERIOR_DETAIL_CAROUSEL_INDEX":
      return { ...state, interiorDetailCarouselIndex: action.index };
    case "SET_INTERIOR_CALLIGRAPHY_TYPE": {
      let defaultColor: string;
      switch (action.newType) {
        case "NORMAL":
          defaultColor = "BLACK";
          break;
        case "PRESTIGE":
          defaultColor = "FAKEBLACK";
          break;
        case "EXCLUSIVE":
          defaultColor = "FAKEBLACK";
          break;
        default:
          throw Error("CANNOT FIND INTERIOR TYPE");
      }

      return {
        ...state,
        interiorCalligraphyType: action.newType,
        interiorCalligraphyColor: defaultColor,
      };
    }
    case "SET_INTERIOR_CALLIGRAPHY_COLOR":
      return {
        ...state,
        interiorCalligraphyColor: action.color,
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
    <NewCarStateContext.Provider value={state}>
      <NewCarDispatchContext.Provider value={dispatch}>
        {children}
      </NewCarDispatchContext.Provider>
    </NewCarStateContext.Provider>
  );
}
