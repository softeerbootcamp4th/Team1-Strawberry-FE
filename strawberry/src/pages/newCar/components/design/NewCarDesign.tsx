import { Label, theme, Wrapper } from "../../../../core/design_system";

import DesginBackground from "/src/pages/newCar/components/design/DesignBackground.svg";

import NewCarExterior from "./NewCarExterior";
import NewCarInterior from "./NewCarInterior";

function NewCarDesign() {
  const designText =
    "라이프 스타일에서 확장된 디자인으로\n새로운 고객 가치를 전달합니다";

  return (
    <Wrapper>
      <Wrapper $position="relative" height="700px">
        <img src={DesginBackground} height="100%" />
        <Wrapper
          $position="absolute"
          $top="0"
          $padding="104px 240px"
          $boxsizing="border-box"
        >
          <Label $token="Display1Medium" color={theme.Color.TextIcon.reverse}>
            Design
          </Label>
          <Label $token="Title2Regular" color={theme.Color.TextIcon.assistive}>
            {designText}
          </Label>
        </Wrapper>
      </Wrapper>
      <NewCarExterior />
      <NewCarInterior />
    </Wrapper>
  );
}

export default NewCarDesign;
