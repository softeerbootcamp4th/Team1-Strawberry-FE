import { Wrapper } from "../../../core/design_system";
import NewCarBanner from "./banner/NewCarBanner";
import NewCarDesign from "./design/NewCarDesign";
import NewCarParts from "./part/NewCarParts";

function NewCarPage() {
  return (
    <Wrapper height="fit-content">
      <NewCarBanner />
      <NewCarParts />
      <NewCarDesign />
    </Wrapper>
  );
}

export default NewCarPage;
