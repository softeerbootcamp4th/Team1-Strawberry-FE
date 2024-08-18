import styled from "styled-components";

import ScrollButton from "../../../common/components/buttons/scrollButton/ScrollButton";

import useLandingBanner from "../../hooks/useLandingBanner";

import LandingBannerBG from "/src/assets/images/temp/LandingBannerBG.svg";

function LandingBanner() {
  const { heightRef, scrollHeight } = useLandingBanner();

  return (
    <>
      <RefWrapper ref={heightRef}>
        <StyledImg src={LandingBannerBG} alt="LandingBannerBG" />
        <ScrollButtonWrapper>
          <ScrollButton scrollHeight={scrollHeight} />
        </ScrollButtonWrapper>
      </RefWrapper>
    </>
  );
}

export default LandingBanner;

const RefWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ScrollButtonWrapper = styled.div`
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
`;
