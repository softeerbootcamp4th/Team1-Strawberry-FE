import { Wrapper } from "../../../../core/design_system";

import DesignCalligraphy from "./DesignCalligraphy";
import ExteriorDesignDetail from "./DesignDetail";
import DesignDetailTitle from "./DesignDetailTitle";

function NewCarExterior() {
  return (
    <Wrapper
      display="flex"
      width="1440px"
      $margin="0 auto"
      $flexdirection="column"
    >
      <Wrapper $padding="80px 0 ">
        <DesignDetailTitle designType="EXTERIOR" />
        <ExteriorDesignDetail designType="EXTERIOR" />
      </Wrapper>
      <DesignCalligraphy designType="EXTERIOR" />
    </Wrapper>
  );
}

export default NewCarExterior;
