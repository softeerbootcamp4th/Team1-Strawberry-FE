import { Wrapper } from "../../../../core/design_system";

import { spaceDatas } from "../../models/NewCarCarouselItem";

import NewCarCarousel from "../NewCarCarousel";

function SpaceCarousel() {
  return (
    <Wrapper $padding="80px 0">
      <NewCarCarousel item={spaceDatas} />
    </Wrapper>
  );
}

export default SpaceCarousel;
