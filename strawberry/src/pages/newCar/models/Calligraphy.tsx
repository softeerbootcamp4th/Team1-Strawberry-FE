import {
  ExteriorCalligraphyType,
  ExteriorCalligraphyColor,
} from "./NewCarTypes";

export interface ExteriorCalligraphy {
  type: ExteriorCalligraphyType;
  color: ExteriorCalligraphyColor;
  name: string;
}

export const calligraphyDatas: ExteriorCalligraphy[] = [
  {
    type: "NORMAL",
    color: "BROWN",
    name: "얼씨 브래스 메탈릭 매트",
  },
  {
    type: "NORMAL",
    color: "WHITEPEARL",
    name: "크리미 화이트 펄",
  },
  {
    type: "NORMAL",
    color: "CYBER",
    name: "사이버 세이지 펄",
  },
  {
    type: "NORMAL",
    color: "BLUE",
    name: "페블 블루 펄",
  },
  {
    type: "NORMAL",
    color: "GREEN",
    name: "오카도 그린 펄",
  },
  {
    type: "NORMAL",
    color: "ORANGE",
    name: "테라코타 오렌지",
  },
  {
    type: "NORMAL",
    color: "GRAY",
    name: "마그네틱 그레이 메탈릭",
  },
  {
    type: "NORMAL",
    color: "BLACK",
    name: "어비스 블랙 펄",
  },
  {
    type: "BLACKINK",
    color: "WHITEPEARL",
    name: "크리미 화이트 펄",
  },
  {
    type: "BLACKINK",
    color: "WHITEMATTE",
    name: "크리미 화이트 매트",
  },
  {
    type: "BLACKINK",
    color: "BLACK",
    name: "어비스 블랙 펄",
  },
];
