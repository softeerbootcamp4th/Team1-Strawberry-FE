import { Wrapper } from "../../../core/design_system";
import NewCarBanner from "./banner/NewCarBanner";
import NewCarDesign from "./design/NewCarDesign";
import NewCarParts from "./part/NewCarParts";
import NewCarSpace from "./space/NewCarSpace";
import NewCarDriving from "./driving/NewCarDriving";
import NewCarGallery from "./gallery/NewCarGallery";
import NewCarBottom from "./bottom/NewCarBottom";

function NewCarPage() {
  return (
    <Wrapper height="fit-content">
      <NewCarBanner />
      <NewCarParts />
      <NewCarDesign />
      <NewCarSpace />
      <NewCarDriving />
      <NewCarGallery />
      <NewCarBottom />
    </Wrapper>
  );
}

export default NewCarPage;
