import styled from "styled-components";

import { ImageEnum } from "../../../../core/design_system";

import ScrollButton from "../../../common/components/buttons/scrollButton/ScrollButton";

import useLandingBanner from "../../../landing/hooks/useLandingBanner";

function NewCarBanner() {
  const { heightRef, scrollHeight } = useLandingBanner();

  return (
    <RefWrapper ref={heightRef}>
      <EventNameLabel>일상과 낭만 사이</EventNameLabel>
      <CarNameLabel>The all-new SANTA FE</CarNameLabel>
      <BackgroundImg src={ImageEnum.IMAGES.NEWCAR.NEWCAR_BANNER_BACKGROUND} />
      <CarImg src={ImageEnum.IMAGES.NEWCAR.NEWCAR_BANNER_CAR} />
      <ScrollButtonWrapper>
        <ScrollButton scrollHeight={scrollHeight} />
      </ScrollButtonWrapper>
    </RefWrapper>
  );
}

export default NewCarBanner;

const RefWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
  overflow-y: hidden;

  background-color: ${({ theme }) => theme.Color.TextIcon.disable};
`;

const ScrollButtonWrapper = styled.div`
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
`;

const EventNameLabel = styled.p`
  position: absolute;
  z-index: 5;

  top: 12%;
  left: 12%;

  color: ${({ theme }) => theme.Color.TextIcon.default};
  font-size: 70px;
  font-weight: 500;
  line-height: 138px;
  letter-spacing: -2px;
`;

const CarNameLabel = styled.p`
  position: absolute;
  z-index: 4;

  top: 25%;
  right: 5%;

  color: ${({ theme }) => theme.Color.TextIcon.default};
  font-size: 120px;
  font-weight: 500;
  line-height: 133%;
  letter-spacing: -3.5px;

  opacity: 0.5;
  mix-blend-mode: overlay;
`;

const BackgroundImg = styled.img`
  position: absolute;
  z-index: 3;

  width: 100%;
  height: 100%;
  vertical-align: top;
`;

const CarImg = styled.img`
  position: absolute;
  top: 28%;
  left: 17%;
  z-index: 10;

  width: 66%;
`;
