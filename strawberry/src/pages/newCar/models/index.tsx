import { ExteriorCalligraphy, exteriorCalligraphyColors } from "./Calligraphy";
import {
  DesignDetail,
  detailFrontData,
  detailFrontCoordinates,
  detailInteriorCoordinates,
  detailInteriorData,
  detailRearData,
  detailRearCoordinates,
} from "./DesignDetail";
import { DesignTitle, designTitles } from "./DesginTitle";
import { Part } from "./Part";
import { NewCarAction } from "./NewCarAction";
import {
  NewCarCarouselItem,
  technologyDatas,
  hybridDatas,
} from "./NewCarCarouselItem";
import { NewCarState } from "./NewCarState";
import {
  DesignType,
  ExteriorCalligraphyType,
  ExteriorType,
  GalleryType,
  InteriorCalligraphyType,
  SpaceType,
} from "./NewCarTypes";

export type {
  DesignDetail,
  DesignTitle,
  DesignType,
  ExteriorCalligraphy,
  ExteriorCalligraphyType,
  ExteriorType,
  GalleryType,
  InteriorCalligraphyType,
  NewCarAction,
  NewCarCarouselItem,
  NewCarState,
  Part,
  SpaceType,
};

export {
  designTitles,
  detailFrontCoordinates,
  detailFrontData,
  detailInteriorCoordinates,
  detailInteriorData,
  detailRearCoordinates,
  detailRearData,
  exteriorCalligraphyColors,
};
export { technologyDatas, hybridDatas };
