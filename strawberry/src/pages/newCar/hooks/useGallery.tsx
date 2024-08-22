import { ImageEnum } from "../../../core/design_system";

import { GalleryType } from "../models";

import { useNewCarDispatch } from "./useNewCarDispatch";
import { useNewCarState } from "./useNewCarState";

function useGallery() {
  const imgs = {
    INTERIOR: ImageEnum.IMAGES.NEWCAR.GALLERY_INTERIOR,
    EXTERIOR: ImageEnum.IMAGES.NEWCAR.GALLERY_EXTERIOR,
  };

  const dispatch = useNewCarDispatch();
  const state = useNewCarState();

  const buttons = [
    { title: "익스테리어", value: "EXTERIOR" as GalleryType },
    { title: "인테리어/스페이스", value: "INTERIOR" as GalleryType },
  ];

  const actionCreator = (value: GalleryType) => {
    dispatch?.({ type: "SET_GALLERY_TYPE", newType: value });
  };

  const selector = state.galleryType;

  return {
    buttons,
    actionCreator,
    selector,
    imgs,
    state,
  };
}

export default useGallery;
