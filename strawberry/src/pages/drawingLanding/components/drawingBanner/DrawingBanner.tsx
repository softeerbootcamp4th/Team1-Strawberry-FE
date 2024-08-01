import {
  theme,
  EventButton,
  Label,
  Wrapper,
} from "../../../../core/design_system";
import { Banner } from "../../../common/components";

import DrawingBannerImg from "../../../../assets/images/temp/DrawingBannerImg.svg";

function DrawingBanner() {
  const title = "매일 참여할 수 있는\n자동차 따라그리기에 도전하세요!";
  return (
    <Banner
      imgSource={DrawingBannerImg}
      eventName="드로잉 이벤트"
      eventTitle={title}
      bottomChildren={<DrawingBannerBottom />}
    ></Banner>
  );
}

function DrawingBannerBottom() {
  return (
    <Wrapper
      display="flex"
      $alignitems="center"
      $flexdirection="column"
      height="fit-content"
      $padding="0 0 77px 0"
      $gap="32px"
    >
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
          마지막 게임 참여 시간 : 14시 30분
        </Label>
      </Wrapper>
      <EventButton type="DRAWING" status="DEFAULT" content="이벤트 참여하기" />
    </Wrapper>
  );
}

export default DrawingBanner;
