import { ImageEnum } from "../../../core/design_system";

interface ItemsType {
  img: string;
  subTitle: string;
  subDescription: string;
  isHint: boolean;
}

export interface NewCarCarouselItem {
  title: string;
  description: string;
  items: ItemsType[];
}

// technology
export const technologyDatas: NewCarCarouselItem = {
  title: "Technology",
  description:
    "운전자와 탑승객을 향한 혁신적인 신기술과 세심한 편의는\n드라이빙 뿐만 아니라 여정의 시작과 마지막을 \n즐겁게 만드는 특별한 경험이 됩니다.",
  items: [
    {
      img: ImageEnum.IMAGES.NEWCAR.TECH01,
      subTitle: "파노라믹 커브드 디스플레이",
      subDescription:
        "2.3인치의 디지털 클러스터와 12.3인치의 인포테인먼트 시스템으로 구성된 디스플레이를\n곡선 형태로 연결하여 고급감을 높이고 와이드하고 하이테크한 이미지를 전달합니다.",
      isHint: false,
    },
    {
      img: ImageEnum.IMAGES.NEWCAR.TECH02,
      subTitle: "디지털 센터 미러",
      subDescription:
        "디지털 센터 미러 전용 카메라를 통해 보다 선명하게\n후방을 확인할 수 있습니다.",
      isHint: false,
    },
    {
      img: ImageEnum.IMAGES.NEWCAR.TECH03,
      subTitle: "실내 지문 인증 시스템",
      subDescription:
        "차량 . 내간편 결제나 발레 모드 해제 시 필요한 인증 기능을 수행하고\n지문 인식만으로 차량의 시동과 주행이 가능합니다",
      isHint: false,
    },
    {
      img: ImageEnum.IMAGES.NEWCAR.TECH04,
      subTitle: "디지털 키2",
      subDescription:
        "아이폰, 애플워치 및 안드로이드 계열 스마트폰으로 도어 잠금/해제 및 시동이 가능하고,\n최대 15개 디바이스까지 사용 권한을 공유할 수 있습니다",
      isHint: false,
    },
    {
      img: ImageEnum.IMAGES.NEWCAR.TECH05,
      subTitle: "양방향 멀티 콘솔",
      subDescription:
        "1열뿐만 아니라 2열에서도 오픈이 가능한\n양방향 멀티 콘솔을 적용하였습니다",
      isHint: true,
    },
    {
      img: ImageEnum.IMAGES.NEWCAR.TECH06,
      subTitle: "6.6인치 터치식 공조 디스플레이",
      subDescription:
        "터치식으로 2열 공조 제어까지 가능하며, 공기청정모드가 적용되어\n쾌적한 실내 환경을 제공합니다.",
      isHint: false,
    },
    {
      img: ImageEnum.IMAGES.NEWCAR.TECH07,
      subTitle: "UV-C 살균 멀티 트레이",
      subDescription:
        "UV-C 자외선 살균 조명을 통해 스마트폰, 장갑, 마스크 등\n소지품의 위행을 관리할 수 있습니다",
      isHint: false,
    },
  ],
};

//
export const hybridDatas: NewCarCarouselItem = {
  title: "Hybrid",
  description:
    "e-Motion Drive의 하이브리드 특화 기술로\n진보된 주행 성능을 제공합니다",
  items: [
    {
      img: ImageEnum.IMAGES.NEWCAR.HYBRID01,
      subTitle: "하이브리드 전용 AVN 콘텐츠",
      subDescription:
        "연비, 에너지 흐름도, ECO 드라이빙 등 하이브리드 전용 화면을 통해\n스마트한 주행 경험을 제공합니다",
      isHint: false,
    },
    {
      img: ImageEnum.IMAGES.NEWCAR.HYBRID02,
      subTitle: "정체구간 특화 제어",
      subDescription:
        "내비게이션 도로 정보를 활용하여 저속 정체구간에서 가감속 반복 시\n불필요한 엔진 시동을 최소화하며 승차감을 향상시킵니다",
      isHint: false,
    },
    {
      img: ImageEnum.IMAGES.NEWCAR.HYBRID03,
      subTitle: "스마트 회생제동 모드",
      subDescription:
        "타행 주행 시, 도로 경사, 전방 차량 주행 상황 및 내비게이션 정보에 따라 자동으로\n회생 제동 단계가 조절되어 운전 편의성을 향상시키는 스마트 회생 시스템이 적용되었습니다",
      isHint: false,
    },
    {
      img: ImageEnum.IMAGES.NEWCAR.HYBRID04,
      subTitle: "패들 회생제동 모드",
      subDescription:
        "패들 쉬프트 레버를 조작해 회생 제동량을 조절 가능하며, 운전자에게\n3가지 레벨의 감속도 조절 기능을 제공하여 주행 조건에 따른 적절한 주행 편의성을 향상시킵니다",
      isHint: false,
    },
  ],
};
