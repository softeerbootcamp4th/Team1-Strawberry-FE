import { NewCarCarouselData } from "../../models/NewCarCarouselData";
import NewCarCarousel from "../NewCarCarousel";

function DrivingCarousel() {
  return <NewCarCarousel data={drivingData}></NewCarCarousel>;
}

export default DrivingCarousel;

const drivingData: NewCarCarouselData = {
  title: "Hybrid",
  description:
    "e-Motion Drive의 하이브리드 특화 기술로\n진보된 주행 성능을 제공합니다",
  imgs: [
    "/src/assets/images/newCar/hybrid_1.svg",
    "/src/assets/images/newCar/hybrid_2.svg",
    "/src/assets/images/newCar/hybrid_3.svg",
    "/src/assets/images/newCar/hybrid_4.svg",
  ],
};
