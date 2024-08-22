import { Wrapper } from "../../../../core/design_system";

import { hybridDatas } from "../../models";

import NewCarCarousel from "../NewCarCarousel";

function DrivingCarousel() {
  return (
    <Wrapper $padding="80px 0">
      <NewCarCarousel datas={hybridDatas} />
    </Wrapper>
  );
}

export default DrivingCarousel;
