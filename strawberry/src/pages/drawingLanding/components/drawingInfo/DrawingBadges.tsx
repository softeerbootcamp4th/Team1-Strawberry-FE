import { Wrapper } from "../../../../core/design_system";
import GreenBadge from "../../../../assets/images/icons/GreenBadgeInfo.svg";
import BlueBadge from "../../../../assets/images/icons/BlueBadgeInfo.svg";

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
        imgSource={GreenBadge}
        description={greenBadgeDescription}
      />
      <DrawingBadgeInfo
        isSmallGap={true}
        isAcquired={isAcquiredExpectationBonus}
        imgSource={BlueBadge}
        description={blueBadgeExpectationDescription}
      />
      <DrawingBadgeInfo
        isSmallGap={true}
        isAcquired={isAcquiredShareBonus}
        imgSource={BlueBadge}
        description={blueBadgeShareDescription}
      />
    </Wrapper>
  );
}

export default DrawingBadges;
