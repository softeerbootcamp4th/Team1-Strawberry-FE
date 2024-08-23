import { Wrapper } from "../../../../core/design_system";

import { technologyDatas } from "../../models/NewCarCarouselItem";

import NewCarCarousel from "../NewCarCarousel";

function SpaceCarousel() {
  return (
    <section>
      <Wrapper $padding="80px 0">
        <NewCarCarousel datas={technologyDatas} />
      </Wrapper>
    </section>
  );
}

export default SpaceCarousel;
