import { Wrapper } from "../../../../core/design_system";

import { Guide } from "../../models/Guide";

function GuideImage(props: Guide) {
  const { image } = props;

  return (
    <Wrapper width="100%" $margin="0 auto">
      <img width="100%" src={image} />
    </Wrapper>
  );
}

export default GuideImage;
