import { theme, Label, Wrapper } from "../../../../core/design_system";

import { useDrawingLandingState } from "../../hooks/useDrawingLandingState";

import DrawingBadges from "./DrawingBadges";

function DrawingInfo() {
  const { drawingLandingData: landData } = useDrawingLandingState();

  return (
    <Wrapper
      $backgroundcolor={theme.Color.Blue.blue100}
      display="flex"
      $flexdirection="column"
    >
      <img
        width="100%"
        height="100%"
        src={landData?.eventImgUrls.description}
      />
      <img width="100%" height="100%" src={landData?.eventImgUrls.how} />
      <Wrapper
        $padding="64px 0 80px 0"
        display="flex"
        $alignitems="center"
        $flexdirection="column"
      >
        <Label
          $token="Title2Medium"
          color={theme.Color.TextIcon.strong}
          $margin="0 0 24px 0"
        >
          게임 배지
        </Label>
        <Wrapper
          display="flex"
          $gap="24px"
          width="fit-content"
          $margin="0 0 40px 0"
        >
          <Label $token="Title3Medium" color={theme.Color.Blue.blue300}>
            배지
          </Label>
          <Label $token="Title3Regular" color={theme.Color.TextIcon.default}>
            드로잉 이벤트 참여 가능 횟수
          </Label>
        </Wrapper>
        <DrawingBadges />
      </Wrapper>
      <img width="100%" height="100%" src={landData?.eventImgUrls.reward} />
    </Wrapper>
  );
}

export default DrawingInfo;
