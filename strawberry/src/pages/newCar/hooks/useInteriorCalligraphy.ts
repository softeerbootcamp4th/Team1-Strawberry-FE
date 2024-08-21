import { ExteriorCalligraphyType, InteriorCalligraphyType } from "../models";

import {
  getInteriorButtons,
  getInteriorColorName,
  getInteriorColorImg,
  getInteriorCalligraphyImg,
  getInteriorColorButtons,
} from "../services/exteriorCalligraphyService";

import { useNewCarDispatch } from "./useNewCarDispatch";
import { useNewCarState } from "./useNewCarState";

export function useInteriorCalligraphy() {
  const state = useNewCarState();
  const dispatch = useNewCarDispatch();

  const selector = state.interiorCalligraphyType;
  const typeButtons = getInteriorButtons();
  const colorButtons = getInteriorColorButtons(state.interiorCalligraphyType);
  const colorName = getInteriorColorName(
    state.interiorCalligraphyType,
    state.interiorCalligraphyColor,
  );

  const calligraphyImg = getInteriorCalligraphyImg(
    state.interiorCalligraphyType,
    state.interiorCalligraphyColor,
  );

  const getColorImg = (color: string) => getInteriorColorImg(color);

  const actionCreator = (
    value: ExteriorCalligraphyType | InteriorCalligraphyType,
  ) => {
    dispatch({
      type: "SET_INTERIOR_CALLIGRAPHY_TYPE",
      newType: value as InteriorCalligraphyType,
    });
  };

  const handleColorButton = (color: string) => {
    dispatch({ type: "SET_INTERIOR_CALLIGRAPHY_COLOR", color: color });
  };

  return {
    selector,
    typeButtons,
    colorButtons,
    colorName,
    calligraphyImg,
    getColorImg,
    actionCreator,
    handleColorButton,
  };
}
