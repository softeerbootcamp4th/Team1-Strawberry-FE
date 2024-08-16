import { Wrapper } from "../../../../core/design_system";

import { drivingData } from "../../models/NewCarCarouselItem";

import NewCarCarousel from "../NewCarCarousel";

function DrivingCarousel() {
  return (
    <Wrapper $padding="80px 0">
      <NewCarCarousel item={drivingData} />
    </Wrapper>
  );
}

export default DrivingCarousel;
