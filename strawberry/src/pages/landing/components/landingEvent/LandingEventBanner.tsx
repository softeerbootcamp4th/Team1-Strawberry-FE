import { Wrapper } from "../../../../core/design_system";

import landingEventBannerImg from "/src/assets/images/temp/LandingEventBanner.svg";

function LandingEventBanner() {
  return (
    <>
      <Wrapper>
        <img
          src={landingEventBannerImg}
          alt="landingEventBanner"
          width="100%"
        />
      </Wrapper>
    </>
  );
}

export default LandingEventBanner;
