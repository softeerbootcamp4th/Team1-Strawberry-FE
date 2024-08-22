import { DesignType } from "../models";
import { useNewCarState } from "./useNewCarState";
import { useNewCarDispatch } from "./useNewCarDispatch";

export const useDesignDetailCarousel = (designType: DesignType) => {
  const { exterionDetailCarouselIndex: carouselIndex } = useNewCarState();
  const dispatch = useNewCarDispatch();

  const handleClose = () => {
    if (designType === "EXTERIOR") {
      dispatch({
        type: "SET_EXTERIOR_DETAIL_INDEX",
        index: undefined,
      });
    } else {
      dispatch({
        type: "SET_INTERIOR_DETAIL_INDEX",
        index: undefined,
      });
    }
  };

  const handleSlideChange = (index: number) => {
    dispatch({
      type: "SET_EXTERIOR_DETAIL_CAROUSEL_INDEX",
      index: index,
    });
  };

  return {
    carouselIndex,
    handleClose,
    handleSlideChange,
  };
};
