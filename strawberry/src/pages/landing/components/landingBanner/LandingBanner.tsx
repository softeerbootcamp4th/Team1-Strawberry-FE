import styled from "styled-components";
import { Wrapper } from "../../../../core/design_system";
import LandingBannerBG from "/src/assets/images/temp/LandingBannerBG.svg";
import LandingBannerScrollButton from "./LandingBannerScrollButton";

function LandingBanner() {
  return (
    <>
      <Wrapper $position="relative" width="100%">
        <StyledImg src={LandingBannerBG} alt="LandingBannerBG" />
        <ScrollButtonWrapper>
          <LandingBannerScrollButton />
        </ScrollButtonWrapper>
      </Wrapper>
    </>
  );
}

export default LandingBanner;

const StyledImg = styled.img`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const ScrollButtonWrapper = styled.div`
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
`;
