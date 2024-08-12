import { Label, theme, Wrapper } from "../../../core/design_system";

interface DrawingScoreType {
  score: number;
}

function DrawingScore({ score }: DrawingScoreType) {
  return (
    <Wrapper width="fit-content" height="fit-content">
      <Label $token="Display1Medium" color={theme.Color.Primary.normal}>
        {score}점
      </Label>
    </Wrapper>
  );
}

export default DrawingScore;
