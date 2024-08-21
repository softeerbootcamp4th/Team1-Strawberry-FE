import {
  ExteriorType,
  ExteriorCalligraphyType,
  InteriorCalligraphyType,
  SpaceType,
  GalleryType,
} from "./NewCarTypes";

export interface NewCarState {
  exteriorType: ExteriorType;
  exteriorDetailIndex: number | undefined;
  exterionDetailCarouselIndex: number;
  exteriorCalligraphyType: ExteriorCalligraphyType;
  exteriorCalligraphyColor: string;
  interiorDetailIndex: number | undefined;
  interiorDetailCarouselIndex: number;
  interiorCalligraphyType: InteriorCalligraphyType;
  interiorCalligraphyColor: string;
  spaceType: SpaceType;
  galleryType: GalleryType;
}
