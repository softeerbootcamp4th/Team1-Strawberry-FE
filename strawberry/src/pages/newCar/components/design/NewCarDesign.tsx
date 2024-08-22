import { Wrapper } from "../../../../core/design_system";

import DesignBanner from "./DesignBanner";
import NewCarExterior from "./NewCarExterior";
import NewCarInterior from "./NewCarInterior";

function NewCarDesign() {
  return (
    <Wrapper>
      <DesignBanner />
      <NewCarExterior />
      <NewCarInterior />
    </Wrapper>
  );
}

export default NewCarDesign;
