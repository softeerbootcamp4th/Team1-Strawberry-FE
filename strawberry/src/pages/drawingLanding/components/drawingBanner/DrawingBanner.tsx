import styled from "styled-components";

import { EventButton, Wrapper } from "../../../../core/design_system";

import { useDrawingLandingState } from "../../hooks/useDrawingLandingState";

import DrawingChance from "./DrawingChance";

function DrawingBanner() {
  const { drawingLandingData: landData } = useDrawingLandingState();

  return (
    <Wrapper $position="relative" height="calc(100vh - 70px)">
      <BannerImage src={landData?.bannerImgUrl}></BannerImage>
      <BannerContentWrapper>
        <DrawingChance />
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
  position: absolute;
  bottom: 0;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
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
