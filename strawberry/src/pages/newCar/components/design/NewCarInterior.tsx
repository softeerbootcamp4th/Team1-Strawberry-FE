import { Wrapper } from "../../../../core/design_system";

import DesignCalligraphy from "./DesignCalligraphy";
import ExteriorDesignDetail from "./DesignDetail";
import DesignDetailTitle from "./DesignDetailTitle";

function NewCarInterior() {
  return (
    <Wrapper
      display="flex"
      width="1440px"
      $margin="0 auto"
      $flexdirection="column"
    >
      <Wrapper $padding="80px 0">
        <DesignDetailTitle designType="INTERIOR" />
        <ExteriorDesignDetail designType="INTERIOR" />
      </Wrapper>
      <DesignCalligraphy designType="INTERIOR" />
    </Wrapper>
  );
}

export default NewCarInterior;
