import { Wrapper } from "../../core/design_system";
import NewCarBanner from "./components/banner/NewCarBanner";
import NewCarDesign from "./components/design/NewCarDesign";
import NewCarParts from "./components/part/NewCarParts";
import NewCarSpace from "./components/space/NewCarSpace";
import NewCarDriving from "./components/driving/NewCarDriving";
import NewCarGallery from "./components/gallery/NewCarGallery";
import NewCarBottom from "./components/bottom/NewCarBottom";

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
