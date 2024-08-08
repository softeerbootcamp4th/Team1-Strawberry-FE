import { Label, theme, Wrapper } from "../../../../core/design_system";
import GuideSlick from "./GuideSlick";

function DrawingGuide() {
  return (
    <Wrapper width="680px" height="650px" $margin="0 auto">
      <Wrapper $padding="40px 44px">
        <Label
          width="100%"
          $textalign="center"
          $token="Title3Medium"
          color={theme.Color.TextIcon.strong}
          $margin="0 0 40px 0"
        >
          게임 설명
        </Label>
        <GuideSlick />
      </Wrapper>
    </Wrapper>
  );
}

export default DrawingGuide;
