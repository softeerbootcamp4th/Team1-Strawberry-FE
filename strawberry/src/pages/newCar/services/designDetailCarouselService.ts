import { DesignDetail } from "../models";

export const getDesignDetailTitle = (detail: DesignDetail[], index: number) => {
  return detail[index]?.title || "";
};

export const getDesignDetailSubtitle = (
  detail: DesignDetail[],
  index: number,
) => {
  return detail[index]?.subTItle || " ";
};
