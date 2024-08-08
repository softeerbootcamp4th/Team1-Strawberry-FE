import { Label, theme, Wrapper } from "../../../../core/design_system";

import { useDrawingLandingState } from "../../hooks/useDrawingLandingState";

import Rank from "./Rank";
import MyDrawingScore from "./MyDrawingScore";

function DrawingRank() {
  const { drawingRankData: rankData } = useDrawingLandingState();

  return (
    <Wrapper
      $boxsizing="border-box"
      $backgroundcolor={theme.Color.Ivory.ivory200}
      $padding="100px"
    >
      <Wrapper width="50%" $margin="0 auto">
        <Label
          width="100%"
          $token="Display2Medium"
          color={theme.Color.TextIcon.default}
          $textalign="center"
        >
          현재 이벤트 랭킹
        </Label>
        <MyDrawingScore />
        <Label
          width="100%"
          $token="Heading2Regular"
          color={theme.Color.TextIcon.info}
          $textalign="right"
        >
          24.07.19 10:55 업데이트
        </Label>
        {rankData?.map((data, index) => (
          <Rank
            key={index}
            rank={index + 1}
            name={data.name}
            score={data.score ?? 0}
          />
        ))}
      </Wrapper>
    </Wrapper>
  );
}

export default DrawingRank;
