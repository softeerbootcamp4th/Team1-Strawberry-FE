import { Wrapper, Label } from "../../../../core/design_system";
import FoundationButton from "../FoundationButton";

type CalligraphyType = "NORMAL" | "BLACKINK";

interface Calligraphy {
  type: CalligraphyType;
  name: string;
  color: string;
}

const calligraphyDatas: Calligraphy[] = [
  {
    type: "NORMAL",
    name: "얼씨 브래스 메탈릭 매트",
    color: "brown",
  },
  {
    type: "NORMAL",
    name: "크리미 화이트 펄",
    color: "whitePearl",
  },
  {
    type: "NORMAL",
    name: "사이버 세이지 펄",
    color: "cyber",
  },
  {
    type: "NORMAL",
    name: "페블 블루 펄",
    color: "blue",
  },
  {
    type: "NORMAL",
    name: "오카도 그린 펄",
    color: "green",
  },
  {
    type: "NORMAL",
    name: "테라코타 오렌지",
    color: "orange",
  },
  {
    type: "NORMAL",
    name: "마그네틱 그레이 메탈릭",
    color: "gray",
  },
  {
    type: "NORMAL",
    name: "어비스 블랙 펄",
    color: "black",
  },
  {
    type: "BLACKINK",
    name: "크리미 화이트 펄",
    color: "whitePearl",
  },
  {
    type: "BLACKINK",
    name: "크리미 화이트 매트",
    color: "whiteMatte",
  },
  {
    type: "BLACKINK",
    name: "어비스 블랙 펄",
    color: "black",
  },
];

function ExteriorCalligraphy() {
  return (
    <Wrapper>
      <Wrapper>
        <FoundationButton variant="SOLID" title="캘리그래피" />
        <FoundationButton variant="OUTLINE" title="캘리그래피(블랙잉크)" />
      </Wrapper>
      <img />
      <Label $token="Title2Medium"></Label>
      {}
    </Wrapper>
  );
}

export default ExteriorCalligraphy;
