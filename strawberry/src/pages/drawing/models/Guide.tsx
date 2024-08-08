import Guide1 from "/src/assets/images/drawingGuide/guide1.svg";
import Guide2 from "/src/assets/images/drawingGuide/guide2.svg";
import Guide3 from "/src/assets/images/drawingGuide/guide3.svg";

export interface Guide {
  description: string;
  image?: string;
}

export const guides: Guide[] = [
  {
    description: "3초 동안 나타나는 차량 사진 기억하기!",
    image: Guide1,
  },
  {
    description: "차량의 외관을 7초 이내에 따라 그리기!",
    image: Guide2,
  },
  {
    description: "총 3단계의 게임을 완료하면, 이벤트 자동 응모!",
    image: Guide3,
  },
  {
    description: "연습 게임!",
    image: undefined,
  },
];
