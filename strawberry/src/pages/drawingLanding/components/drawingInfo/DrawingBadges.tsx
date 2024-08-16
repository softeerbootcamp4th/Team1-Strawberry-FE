import { Wrapper, ImageEnum } from "../../../../core/design_system";

import { useDrawingLandingState } from "../../hooks/useDrawingLandingState";
import { useDrawingBadges } from "../../hooks/useDrawingBadges";

import DrawingBadgeInfo from "./DrawingBadgeInfo";

function DrawingBadges() {
  const { eventUserData } = useDrawingLandingState();

  const {
    greenBadgeDescription,
    blueBadgeExpectationDescription,
    blueBadgeShareDescription,
    isAcquiredExpectationBonus,
    isAcquiredShareBonus,
  } = useDrawingBadges(eventUserData);

  return (
    <Wrapper display="flex" width="75%" $gap="24px" height="340px">
      <DrawingBadgeInfo
        isSmallGap={false}
        isAcquired={false}
        imgSource={ImageEnum.ICONS.GREENBADGEINFO}
        description={greenBadgeDescription}
      />
      <DrawingBadgeInfo
        isSmallGap={true}
        isAcquired={isAcquiredExpectationBonus}
        imgSource={ImageEnum.ICONS.BLUEBADGEINFO}
        description={blueBadgeExpectationDescription}
      />
      <DrawingBadgeInfo
        isSmallGap={true}
        isAcquired={isAcquiredShareBonus}
        imgSource={ImageEnum.ICONS.BLUEBADGEINFO}
        description={blueBadgeShareDescription}
      />
    </Wrapper>
  );
}

export default DrawingBadges;
