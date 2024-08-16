import { ImageEnum } from "../../../core/design_system";

export interface Part {
  imgUrl: string;
  title: string;
  description: string;
}

export const partDatas: Part[] = [
  {
    imgUrl: ImageEnum.IMAGES.NEWCAR.PARTS1,
    title: "전자식 변속 칼럼",
    description:
      "칼럼 로터리 타입 전자식 변속 다이얼로 조작 방향과 구동 방향을\n일치시켜 직관적인 조작방식을 구현했습니다",
  },
  {
    imgUrl: ImageEnum.IMAGES.NEWCAR.PARTS2,
    title: "1열 릴렉션 컴포트 시트",
    description:
      "1열 탑승객에게 최적의 휴식 자세를 제공하며,\n원터치 버튼을 적용하여 사용 편의성을 높였습니다",
  },
  {
    imgUrl: ImageEnum.IMAGES.NEWCAR.PARTS3,
    title: "다이나믹 웰컴 라이트",
    description:
      "풀 LED가 적용된 헤드램프와 리어램프는 현대차 엠블럼을 아이코닉한 형상\n으로 재해석한 ‘H 라이트’로 설계돼 창의적 자유성을 보여주었습니다",
  },
  {
    imgUrl: ImageEnum.IMAGES.NEWCAR.PARTS4,
    title: "파노라믹 커브스 디스플레이",
    description:
      "디지털 클러스터와 인포테인먼트 시스템으로 구성된 디스플레이를 곡선 형태로\n연결하여 고급감을 높이고 와이드하고 하이테크한 이미지를 전달합니다.",
  },
];
