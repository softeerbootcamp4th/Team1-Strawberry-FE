import { ImageEnum } from "../../../core/design_system";
import { Point } from "../../drawingPlay/models";

import {
  ExteriorType,
  DesignDetail,
  detailFrontData,
  detailRearData,
  detailFrontCoordinates,
  detailRearCoordinates,
  detailInteriorCoordinates,
  detailInteriorData,
} from "../models";

export const ExteriorDesignDetailError = {
  INDEX_NOT_FOUND: () => new Error("CANNOT FOUND CAR DESIGN INFO"),
  IMAGE_NOT_FOUND: (key: string) =>
    new Error(`CANNOT FOUND IMAGE FOR KEY: ${key}`),
  TYPE_NOT_FOUND: () => new Error("INVALID EXTERIOR TYPE"),
};

export const getExteriorBackgroundImg = (
  exteriorType: ExteriorType,
): string => {
  switch (exteriorType) {
    case "FRONT":
      return ImageEnum.IMAGES.NEWCAR.EXTERIOR_FRONT_BACKGROUND;
    case "REAR":
      return ImageEnum.IMAGES.NEWCAR.EXTERIOR_REAR_BACKGROUND;
    default:
      throw ExteriorDesignDetailError.TYPE_NOT_FOUND();
  }
};

export const getInteriorBackgroundImg = (): string => {
  return ImageEnum.IMAGES.NEWCAR.INTERIOR_BACKGROUND;
};

export const getExteriorCoordinates = (exteriorType: ExteriorType): Point[] => {
  switch (exteriorType) {
    case "FRONT":
      return detailFrontCoordinates;
    case "REAR":
      return detailRearCoordinates;
    default:
      throw ExteriorDesignDetailError.TYPE_NOT_FOUND();
  }
};

export const getInteriorCoordinates = (): Point[] => {
  return detailInteriorCoordinates;
};

export const getExteriorDetailData = (
  exteriorType: ExteriorType,
  index: number | undefined,
): DesignDetail[] | undefined => {
  if (index === undefined) {
    return undefined;
  }

  switch (exteriorType) {
    case "FRONT":
      return detailFrontData[index];
    case "REAR":
      return detailRearData[index];
    default:
      throw ExteriorDesignDetailError.TYPE_NOT_FOUND();
  }
};

export const getInteriorDetailData = (
  index: number | undefined,
): DesignDetail[] | undefined => {
  if (index === undefined) {
    return undefined;
  }

  return detailInteriorData[index];
};

export const getExteriorButtons = (): {
  title: string;
  value: ExteriorType;
}[] => {
  return [
    { title: "Front", value: "FRONT" as ExteriorType },
    { title: "Rear", value: "REAR" as ExteriorType },
  ];
};
