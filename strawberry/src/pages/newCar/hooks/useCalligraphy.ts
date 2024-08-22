import { DesignType } from "../models";

import { useExteriorCalligraphy } from "./useExteriorCalligraphy";
import { useInteriorCalligraphy } from "./useInteriorCalligraphy";

export function useDesignCalligraphy(designType: DesignType) {
  const exteriorCalligraphy = useExteriorCalligraphy();
  const interiorCalligraphy = useInteriorCalligraphy();

  if (designType === "EXTERIOR") {
    return exteriorCalligraphy;
  } else if (designType === "INTERIOR") {
    return interiorCalligraphy;
  } else {
    throw new Error("Invalid design type");
  }
}
