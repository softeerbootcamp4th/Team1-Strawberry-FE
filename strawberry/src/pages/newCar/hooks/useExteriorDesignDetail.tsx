import { ExteriorType } from "../models";

import {
  getExteriorButtons,
  getExteriorBackgroundImg,
  getExteriorCoordinates,
  getExteriorDetailData,
} from "../services/exteriorDesignDetailService.ts";

import { useNewCarState } from "./useNewCarState";
import { useNewCarDispatch } from "./useNewCarDispatch";

export const useExteriorDesignDetail = () => {
  const state = useNewCarState();
  const dispatch = useNewCarDispatch();

  const selector = state.exteriorType;

  const buttons = getExteriorButtons();

  const actionCreator = (value: ExteriorType) => {
    dispatch({
      type: "SET_EXTERIOR_TYPE",
      newType: value,
    });
  };

  const backgroundImg = getExteriorBackgroundImg(state.exteriorType);
  const detailCoordinates = getExteriorCoordinates(state.exteriorType);
  const detailData = getExteriorDetailData(
    state.exteriorType,
    state.exteriorDetailIndex,
  );

  const handleCoordinatesClick = (index: number) => {
    console.log(index);

    dispatch({
      type: "SET_EXTERIOR_DETAIL_INDEX",
      index: index,
    });
  };

  return {
    buttons,
    actionCreator,
    selector,
    handleCoordinatesClick,
    backgroundImg,
    detailCoordinates,
    detailData,
  };
};
