import styled from "styled-components";

import Background1 from "./Background1.svg";
import Background2 from "./Background2.svg";
import BannerSantfae from "./BannerSantafe.svg";

import ScrollButton from "../../../common/components/buttons/scrollButton/ScrollButton";

import useLandingBanner from "../../../landing/hooks/useLandingBanner";

function NewCarBanner() {
  const { heightRef, scrollHeight } = useLandingBanner();

  return (
    <RefWrapper ref={heightRef}>
      <EventNameLabel>일상과 낭만 사이</EventNameLabel>
      <CarNameLabel>The all-new SANTA FE</CarNameLabel>
      <Background1Img src={Background1} />
      <Background2Img src={Background2} />
      <CarImg src={BannerSantfae} />
      <DimmerWrapper>
        <UpDimmer />
        <BottomDimmer />
      </DimmerWrapper>
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

const Background1Img = styled.img`
  position: absolute;
  top: 0;
  left: 300px;
  z-index: 3;

  /* width: 40%; */
  height: 100%;
  vertical-align: top;
`;

const Background2Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  vertical-align: bottom;

  fill:
    linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%),
    url(<path-to-image>) lightgray -0.198px -120.729px / 100.02% 113.957%
      no-repeat;

  opacity: 0.8;
  mix-blend-mode: soft-light;
`;

const DimmerWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;

  width: 100%;
  height: 42%;
`;

const UpDimmer = styled.div`
  width: 100%;
  height: 18%;

  opacity: 0.8;
  background: linear-gradient(
      90deg,
      rgba(215, 215, 211, 0.8) 0%,
      rgba(162, 162, 162, 0.8) 100%
    ),
    rgba(215, 215, 211, 0.6);
  filter: blur(25px);
`;

const BottomDimmer = styled.div`
  width: 100%;
  height: 82%;
  background: linear-gradient(
    180deg,
    rgba(64, 64, 64, 0) 0%,
    rgba(33, 33, 33, 0.22) 33%,
    rgba(13, 13, 13, 0.59) 61.5%,
    rgba(4, 4, 4, 0.7) 100%
  );
`;

const CarImg = styled.img`
  position: absolute;
  top: 28%;
  left: 17%;
  z-index: 10;

  width: 66%;
`;
