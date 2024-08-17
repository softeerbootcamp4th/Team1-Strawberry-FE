import { ImageEnum } from "../../../core/design_system";

export interface NewCarCarouselItem {
  title: string;
  description: string;
  imgs: string[];
}

export const drivingData: NewCarCarouselItem = {
  title: "Hybrid",
  description:
    "e-Motion Drive의 하이브리드 특화 기술로\n진보된 주행 성능을 제공합니다",
  imgs: [
    ImageEnum.IMAGES.NEWCAR.HYBRID01,
    ImageEnum.IMAGES.NEWCAR.HYBRID02,
    ImageEnum.IMAGES.NEWCAR.HYBRID03,
    ImageEnum.IMAGES.NEWCAR.HYBRID04,
  ],
};

export const spaceDatas: NewCarCarouselItem = {
  title: "Technology",
  description:
    "운전자와 탑승객을 향한 혁신적인 신기술과 세심한 편의는\n드라이빙 뿐만 아니라 여정의 시작과 마지막을\n즐겁게 만드는 특별한 경험이 됩니다.",
  imgs: [
    ImageEnum.IMAGES.NEWCAR.TECH01,
    ImageEnum.IMAGES.NEWCAR.TECH02,
    ImageEnum.IMAGES.NEWCAR.TECH03,
    ImageEnum.IMAGES.NEWCAR.TECH04,
    ImageEnum.IMAGES.NEWCAR.TECH05,
    ImageEnum.IMAGES.NEWCAR.TECH06,
    ImageEnum.IMAGES.NEWCAR.TECH07,
  ],
};
