import { theme, Label, Wrapper } from "../../../../core/design_system";

import DrawingInfoImg from "../../../../assets/images/temp/DrawingInfoImg.svg";
import DrawingParticipantGuide from "../../../../assets/images/temp/DrawingParticipantGuide.svg";
import DrawingReward from "../../../../assets/images/temp/DrawingReward.svg";
import GreenBadge from "../../../../assets/images/icons/GreenBadgeInfo.svg";
import BlueBadge from "../../../../assets/images/icons/BlueBadgeInfo.svg";

import DrawingBadgeInfo from "./DrawingBadgeInfo";

function DrawingInfo() {
  const descriptions = [
    "마지막 게임 참여 시간으로부터\n4시간마다 배지가 하나씩 자동으로 충전됩니다.\n배지는 최대 2개까지 충전되며,\n사용한 후 다시 충전할 수 있어요!",
    "신차 기대평 최초 작성 시\n1개가 주어져요!",
    "게임 최초 공유 시\n1개가 주어져요!",
  ];

  return (
    <Wrapper
      $backgroundcolor={theme.Color.Blue.blue100}
      display="flex"
      $flexdirection="column"
    >
      <img width="100%" height="100%" src={DrawingInfoImg} />
      <img width="100%" height="100%" src={DrawingParticipantGuide} />
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
        <Wrapper display="flex" width="75%" $gap="24px" height="340px">
          <DrawingBadgeInfo
            isSmallGap={false}
            isAcquired={false}
            imgSource={GreenBadge}
            description={descriptions[0]}
          />
          <DrawingBadgeInfo
            isSmallGap={true}
            isAcquired={true}
            imgSource={BlueBadge}
            description={descriptions[1]}
          />
          <DrawingBadgeInfo
            isSmallGap={true}
            isAcquired={false}
            imgSource={BlueBadge}
            description={descriptions[2]}
          />
        </Wrapper>
      </Wrapper>
      <img width="100%" height="100%" src={DrawingReward} />
    </Wrapper>
  );
}

export default DrawingInfo;
