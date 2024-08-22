import {
  getInteriorBackgroundImg,
  getInteriorDetailData,
  getInteriorCoordinates,
} from "../services/exteriorDesignDetailService.ts";

import { useNewCarState } from "./useNewCarState";
import { useNewCarDispatch } from "./useNewCarDispatch";

export function useInteriorDesignDetail() {
  const state = useNewCarState();
  const dispatch = useNewCarDispatch();

  const backgroundImg = getInteriorBackgroundImg();
  const detailCoordinates = getInteriorCoordinates();
  const detailData = getInteriorDetailData(state.interiorDetailIndex);

  const handleCoordinatesClick = (index: number) => {
    dispatch({
      type: "SET_INTERIOR_DETAIL_INDEX",
      index: index,
    });
  };

  return {
    backgroundImg,
    detailCoordinates,
    detailData,
    handleCoordinatesClick,
  };
}
