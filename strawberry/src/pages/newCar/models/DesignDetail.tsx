import { ImageEnum } from "../../../core/design_system";
import { Point } from "../../drawingPlay/models";

export interface DesignDetail {
  title: string;
  subTItle: string | undefined;
  imageURL: string;
}

export const detailFrontCoordinates: Point[] = [
  { x: 146, y: 313 },
  { x: 289, y: 317 },
  { x: 420, y: 313 },
  { x: 520, y: 446 },
];

export const detailRearCoordinates: Point[] = [
  { x: 171, y: 256 },
  { x: 167, y: 384 },
  { x: 261, y: 466 },
  { x: 391, y: 277 },
  { x: 516, y: 238 },
];

export const detailInteriorCoordinates: Point[] = [
  { x: 196, y: 267 },
  { x: 365, y: 320 },
  { x: 401, y: 531 },
  { x: 494, y: 388 },
  { x: 629, y: 577 },
  { x: 767, y: 253 },
  { x: 192, y: 577 },
];

export const detailFrontData: DesignDetail[][] = [
  [
    {
      title: "라디에이터 & 인테이크 그릴",
      subTItle: undefined,
      imageURL: ImageEnum.IMAGES.NEWCAR.EXTERIOR_FRONT_01,
    },
  ],
  [
    {
      title: "수평형 LED 램프",
      subTItle: "포지셔닝 램프",
      imageURL: ImageEnum.IMAGES.NEWCAR.EXTERIOR_FRONT_02,
    },
  ],
  [
    {
      title: "Full LED 헤드램프",
      subTItle: "프로젝션 타입",
      imageURL: ImageEnum.IMAGES.NEWCAR.EXTERIOR_FRONT_03_1,
    },
    {
      title: "Full LED 헤드램프",
      subTItle: "MFR 타입",
      imageURL: ImageEnum.IMAGES.NEWCAR.EXTERIOR_FRONT_03_2,
    },
  ],
  [
    {
      title: "21인치 알로이 휠",
      subTItle: "가솔린 전용",
      imageURL: ImageEnum.IMAGES.NEWCAR.EXTERIOR_FRONT_04_1,
    },
    {
      title: "20인치 알로이 휠",
      subTItle: undefined,
      imageURL: ImageEnum.IMAGES.NEWCAR.EXTERIOR_FRONT_04_2,
    },
    {
      title: "18인치 알로이 휠",
      subTItle: "가솔린 전용",
      imageURL: ImageEnum.IMAGES.NEWCAR.EXTERIOR_FRONT_04_3,
    },
    {
      title: "20인치 알로이 휠",
      subTItle: "AWD 하이브리드 전용",
      imageURL: ImageEnum.IMAGES.NEWCAR.EXTERIOR_FRONT_04_4,
    },
    {
      title: "18인치 알로이 휠",
      subTItle: "하이브리드 전용",
      imageURL: ImageEnum.IMAGES.NEWCAR.EXTERIOR_FRONT_04_5,
    },
  ],
];

export const detailRearData: DesignDetail[][] = [
  [
    {
      title: "리어 스포일러",
      subTItle: undefined,
      imageURL: ImageEnum.IMAGES.NEWCAR.EXTERIOR_REAR_01,
    },
  ],
  [
    {
      title: "LED 리어콤비램프",
      subTItle: undefined,
      imageURL: ImageEnum.IMAGES.NEWCAR.EXTERIOR_REAR_02,
    },
  ],
  [
    {
      title: "머플러",
      subTItle: "가솔린 전용",
      imageURL: ImageEnum.IMAGES.NEWCAR.EXTERIOR_REAR_03_1,
    },
    {
      title: "히든타입 머플러",
      subTItle: "하이브리드 전용",
      imageURL: ImageEnum.IMAGES.NEWCAR.EXTERIOR_REAR_03_2,
    },
  ],
  [
    {
      title: "히든 타입 어시스트 핸들",
      subTItle: undefined,
      imageURL: ImageEnum.IMAGES.NEWCAR.EXTERIOR_REAR_04,
    },
  ],
  [
    {
      title: "루프랙",
      subTItle: undefined,
      imageURL: ImageEnum.IMAGES.NEWCAR.EXTERIOR_REAR_05,
    },
  ],
];

export const detailInteriorData: DesignDetail[][] = [
  [
    {
      title: "투톤 가죽 스티어링 휠",
      subTItle: undefined,
      imageURL: ImageEnum.IMAGES.NEWCAR.INTERIOR_01,
    },
  ],
  [
    {
      title: "전자식 변속 칼럼",
      subTItle: undefined,
      imageURL: ImageEnum.IMAGES.NEWCAR.INTERIOR_02,
    },
  ],
  [
    {
      title: "스마트폰 무선 충전",
      subTItle: "듀얼",
      imageURL: ImageEnum.IMAGES.NEWCAR.INTERIOR_03,
    },
  ],
  [
    {
      title: "6.6인치 터치식 공조 디스플레이",
      subTItle: undefined,
      imageURL: ImageEnum.IMAGES.NEWCAR.INTERIOR_04,
    },
  ],
  [
    {
      title: "센터 콘솔 하단 대용량 수납공간",
      subTItle: undefined,
      imageURL: ImageEnum.IMAGES.NEWCAR.INTERIOR_05,
    },
  ],
  [
    {
      title: "UV-C 살균 멀티 트레이",
      subTItle: undefined,
      imageURL: ImageEnum.IMAGES.NEWCAR.INTERIOR_06,
    },
  ],
  [
    {
      title: "양방향 멀티 콘솔",
      subTItle: undefined,
      imageURL: ImageEnum.IMAGES.NEWCAR.INTERIOR_07,
    },
  ],
];
