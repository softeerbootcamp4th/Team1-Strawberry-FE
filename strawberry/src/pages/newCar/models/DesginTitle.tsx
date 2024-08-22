import { DesignType } from "./NewCarTypes";

export interface DesignTitle {
  type: DesignType;
  title: string;
  description: string;
}

export const designTitles: DesignTitle[] = [
  {
    type: "EXTERIOR",
    title: "Exterior",
    description:
      "견고한 디자인에 미래 지향적인 디테일을 더해 싼타페만의 압도적인 존재감을 전달합니다",
  },
  {
    type: "INTERIOR",
    title: "Interior",
    description:
      "하이테크한 디자인이 가미된 실내공간은 싼타페만의 차별화된 경험을 선사합니다",
  },
];
