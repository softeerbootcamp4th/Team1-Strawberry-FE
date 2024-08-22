import {
  ExteriorType,
  ExteriorCalligraphyType,
  InteriorCalligraphyType,
  SpaceType,
  GalleryType,
} from "./NewCarTypes";

export type NewCarAction =
  | {
      type: "SET_EXTERIOR_TYPE";
      newType: ExteriorType;
    }
  | {
      type: "SET_EXTERIOR_DETAIL_INDEX";
      index: number | undefined;
    }
  | {
      type: "SET_EXTERIOR_DETAIL_CAROUSEL_INDEX";
      index: number;
    }
  | {
      type: "SET_EXTERIOR_CALLIGRAPHY_TYPE";
      newType: ExteriorCalligraphyType;
    }
  | {
      type: "SET_EXTERIOR_CALLIGRAPHY_COLOR";
      color: string;
    }
  | {
      type: "SET_INTERIOR_DETAIL_INDEX";
      index: number | undefined;
    }
  | {
      type: "SET_INTERIOR_DETAIL_CAROUSEL_INDEX";
      index: number;
    }
  | {
      type: "SET_INTERIOR_CALLIGRAPHY_TYPE";
      newType: InteriorCalligraphyType;
    }
  | {
      type: "SET_INTERIOR_CALLIGRAPHY_COLOR";
      color: string;
    }
  | {
      type: "SET_SPACE_TYPE";
      newType: SpaceType;
    }
  | {
      type: "SET_GALLERY_TYPE";
      newType: GalleryType;
    };
