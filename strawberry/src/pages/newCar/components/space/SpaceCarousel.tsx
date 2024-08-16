import NewCarCarousel from "../NewCarCarousel";
import { NewCarCarouselData } from "../../models/NewCarCarouselData";

function SpaceCarousel() {
  return <NewCarCarousel data={spaceDatas} />;
}

export default SpaceCarousel;

const spaceDatas: NewCarCarouselData = {
  title: "Technology",
  description:
    "운전자와 탑승객을 향한 혁신적인 신기술과 세심한 편의는\n드라이빙 뿐만 아니라 여정의 시작과 마지막을\n즐겁게 만드는 특별한 경험이 됩니다.",
  imgs: [
    "/src/assets/images/newCar/technology_1.svg",
    "/src/assets/images/newCar/technology_2.svg",
    "/src/assets/images/newCar/technology_3.svg",
    "/src/assets/images/newCar/technology_4.svg",
    "/src/assets/images/newCar/technology_5.svg",
    "/src/assets/images/newCar/technology_6.svg",
    "/src/assets/images/newCar/technology_7.svg",
  ],
};
