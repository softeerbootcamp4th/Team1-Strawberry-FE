import { Point } from "../../drawingPlay/models";
import { DesignType, ExteriorType, DesignDetail } from "../models";
import { useExteriorDesignDetail } from "./useExteriorDesignDetail";
import { useInteriorDesignDetail } from "./useInteriorDesignDetail";

interface DesignDetailHook {
  buttons?: { title: string; value: ExteriorType }[];
  actionCreator?: (value: ExteriorType) => void;
  selector?: ExteriorType;
  handleCoordinatesClick: (index: number) => void;
  backgroundImg: string;
  detailCoordinates: Point[];
  detailData: DesignDetail[] | undefined;
}

export const useDesignDetailByType = (
  designType: DesignType,
): DesignDetailHook => {
  const exteriorDetail = useExteriorDesignDetail();
  const interiorDetail = useInteriorDesignDetail();

  if (designType === "EXTERIOR") {
    return exteriorDetail;
  } else if (designType === "INTERIOR") {
    return interiorDetail;
  } else {
    throw new Error("Invalid design type");
  }
};
