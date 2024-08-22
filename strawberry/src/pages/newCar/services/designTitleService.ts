import { DesignTitle, DesignType, designTitles } from "../models";

export const getDesignTitle = (type: DesignType): DesignTitle | undefined => {
  return designTitles.find((designTitle) => designTitle.type === type);
};
