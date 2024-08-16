import { ImageEnum } from "../../../core/design_system";

export interface Guide {
  description: string;
  image?: string;
}

export const guides: Guide[] = [
  {
    description: "3초 동안 나타나는 차량 사진 기억하기!",
    image: ImageEnum.IMAGES.DRAWING.GUIDE_01,
  },
  {
    description: "차량의 외관을 7초 이내에 따라 그리기!",
    image: ImageEnum.IMAGES.DRAWING.GUIDE_02,
  },
  {
    description: "총 3단계의 게임을 완료하면, 이벤트 자동 응모!",
    image: ImageEnum.IMAGES.DRAWING.GUIDE_03,
  },
  {
    description: "연습 게임!",
    image: undefined,
  },
];
