import { ImageEnum } from "../../../core/design_system";

import {
  ExteriorCalligraphyType,
  InteriorCalligraphyType,
  exteriorCalligraphyColors,
} from "../models";
import { interiorCalligraphyColors } from "../models/Calligraphy";

export const getExteriorButtons = () => {
  return [
    { title: "캘리그래피", value: "NORMAL" as ExteriorCalligraphyType },
    {
      title: "캘리그래피(블랙잉크)",
      value: "BLACKINK" as ExteriorCalligraphyType,
    },
  ];
};

export const getInteriorButtons = () => {
  return [
    { title: "캘리그래피", value: "NORMAL" as InteriorCalligraphyType },
    { title: "프레스티지", value: "PRESTIGE" as InteriorCalligraphyType },
    { title: "익스클루시브", value: "EXCLUSIVE" as InteriorCalligraphyType },
  ];
};

export const getExteriorColorName = (
  type: ExteriorCalligraphyType,
  color: string,
) => {
  const newColor = exteriorCalligraphyColors.find(
    (data) => data.type === type && data.color === color,
  );
  return newColor ? newColor.name : "Color not found";
};

export const getInteriorColorName = (
  type: InteriorCalligraphyType,
  color: string,
) => {
  const newColor = interiorCalligraphyColors.find(
    (data) => data.type === type && data.color === color,
  );
  return newColor ? newColor.name : "Color not found";
};

export const getExteriorColorImg = (color: string) => {
  const imageKey =
    `EXTERIOR_${color.toUpperCase()}_COLOR` as keyof typeof ImageEnum.IMAGES.NEWCAR;
  return ImageEnum.IMAGES.NEWCAR[imageKey];
};

export const getInteriorColorImg = (color: string) => {
  const imageKey =
    `INTERIOR_${color.toUpperCase()}_COLOR` as keyof typeof ImageEnum.IMAGES.NEWCAR;
  return ImageEnum.IMAGES.NEWCAR[imageKey];
};

export const getExteriorCalligraphyImg = (
  type: ExteriorCalligraphyType,
  color: string,
) => {
  const imageKey =
    `EXTERIOR${type === "NORMAL" ? "" : `_${type.toUpperCase()}`}_${color.toUpperCase()}` as keyof typeof ImageEnum.IMAGES.NEWCAR;
  return ImageEnum.IMAGES.NEWCAR[imageKey];
};

export const getInteriorCalligraphyImg = (
  type: InteriorCalligraphyType,
  color: string,
) => {
  const imageKey =
    `INTERIOR${type === "NORMAL" ? "" : `_${type.toUpperCase()}`}_${color.toUpperCase()}` as keyof typeof ImageEnum.IMAGES.NEWCAR;
  return ImageEnum.IMAGES.NEWCAR[imageKey];
};

export const getExteriorColorButtons = (type: ExteriorCalligraphyType) => {
  return exteriorCalligraphyColors.filter((data) => data.type === type);
};

export const getInteriorColorButtons = (type: InteriorCalligraphyType) => {
  return interiorCalligraphyColors.filter((data) => data.type === type);
};
