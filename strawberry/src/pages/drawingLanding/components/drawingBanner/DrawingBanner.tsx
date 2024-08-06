import styled from "styled-components";

import {
  theme,
  EventButton,
  Label,
  Wrapper,
} from "../../../../core/design_system";

function DrawingBanner() {
  return (
    <Wrapper $position="relative" height="calc(100vh - 70px)">
      <BannerImage src={QuizBannerImage}></BannerImage>
      <BannerContentWrapper>
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
        <EventButton
          type="DRAWING"
          status="DEFAULT"
          content="이벤트 참여하기"
        />
      </BannerContentWrapper>
    </Wrapper>
  );
}

export default DrawingBanner;

const BannerContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  padding-bottom: 77px;
  gap: 32px;
`;

const BannerImage = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;
