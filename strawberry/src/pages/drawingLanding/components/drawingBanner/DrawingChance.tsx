import { theme, Wrapper, Label } from "../../../../core/design_system";

import { useDrawingChance } from "../../hooks/useDrawingChance";
import { useDrawingLandingState } from "../../hooks/useDrawingLandingState";

interface DrawingChanceProps {
  isLogin: boolean;
  isFirst: boolean;
}

function DrawingChance({ isLogin, isFirst }: DrawingChanceProps) {
  const { eventUserData } = useDrawingLandingState();

  const text = useDrawingChance(eventUserData);

  return (
    <Wrapper
      $backgroundcolor={theme.Color.Dimmer.default}
      width="fit-content"
      height="fit-content"
      $padding="12px 100px"
      borderRadius="6px"
    >
      <Label
        width="100%"
        $token="Body1Regular"
        color={theme.Color.TextIcon.reverse}
        $textalign="center"
      >
        {!isLogin
          ? "자동차 따라그리기에 도전해보세요!"
          : isFirst
            ? "첫 게임에 도전해보세요!"
            : text}
      </Label>
    </Wrapper>
  );
}

export default DrawingChance;
