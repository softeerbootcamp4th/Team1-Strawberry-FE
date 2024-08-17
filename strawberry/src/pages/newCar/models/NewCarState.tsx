import {
  ExteriorType,
  ExteriorCalligraphyType,
  InteriorCalligraphyType,
  SpaceType,
  GalleryType,
} from "./NewCarTypes";

export interface NewCarState {
  exteriorType: ExteriorType;
  isExteriorDetailOpen: boolean;
  exteriorCalligraphyType: ExteriorCalligraphyType;
  exteriorCalligraphyColor: string;
  isInteriorDetailOpen: boolean;
  interiorCalligraphyType: InteriorCalligraphyType;
  interiorCallligraphyColor: string;
  spaceType: SpaceType;
  galleryType: GalleryType;
}
