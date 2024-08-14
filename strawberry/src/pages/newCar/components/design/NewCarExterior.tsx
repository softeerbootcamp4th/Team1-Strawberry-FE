import { Label, theme, Wrapper } from "../../../../core/design_system";
import FoundationButton from "../FoundationButton";

type Exterior = "FRONT" | "REAR";

function NewCarExterior() {
  return (
    <Wrapper
      display="flex"
      $flexdirection="column"
      $padding="80px 240px"
      $boxsizing="border-box"
      $gap="32px"
    >
      <Wrapper
        display="flex"
        $flexdirection="column"
        $justifycontent="center"
        $alignitems="center"
        $gap="8px"
      >
        <Label $token="Display2Medium" color={theme.Color.TextIcon.default}>
          Exterior
        </Label>
        <Label $token="Heading1Regular" color={theme.Color.TextIcon.sub}>
          견고한 디자인에 미래 지향적인 디테일을 더해 싼타페만의 압도적인
          존재감을 전달합니다
        </Label>
      </Wrapper>
      <Wrapper
        display="flex"
        $justifycontent="center"
        $alignitems="center"
        $gap="8px"
      >
        <FoundationButton variant="SOLID" title="Front" />
        <FoundationButton variant="OUTLINE" title="Rear" />
      </Wrapper>
    </Wrapper>
  );
}

export default NewCarExterior;
