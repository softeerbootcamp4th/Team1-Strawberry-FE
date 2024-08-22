import { ExteriorCalligraphyType, InteriorCalligraphyType } from "../models";

import {
  getExteriorButtons,
  getExteriorColorButtons,
  getExteriorColorName,
  getExteriorCalligraphyImg,
  getExteriorColorImg,
} from "../services/exteriorCalligraphyService";

import { useNewCarDispatch } from "./useNewCarDispatch";
import { useNewCarState } from "./useNewCarState";

export function useExteriorCalligraphy() {
  const state = useNewCarState();
  const dispatch = useNewCarDispatch();

  const selector = state.exteriorCalligraphyType;
  const typeButtons = getExteriorButtons();
  const colorButtons = getExteriorColorButtons(state.exteriorCalligraphyType);
  const colorName = getExteriorColorName(
    state.exteriorCalligraphyType,
    state.exteriorCalligraphyColor,
  );

  const calligraphyImg = getExteriorCalligraphyImg(
    state.exteriorCalligraphyType,
    state.exteriorCalligraphyColor,
  );

  const getColorImg = (color: string) => getExteriorColorImg(color);

  const actionCreator = (
    value: ExteriorCalligraphyType | InteriorCalligraphyType,
  ) => {
    dispatch({
      type: "SET_EXTERIOR_CALLIGRAPHY_TYPE",
      newType: value as ExteriorCalligraphyType,
    });
  };

  const handleColorButton = (color: string) => {
    dispatch({ type: "SET_EXTERIOR_CALLIGRAPHY_COLOR", color: color });
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
