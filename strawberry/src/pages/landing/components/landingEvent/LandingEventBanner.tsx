import { Wrapper } from "../../../../core/design_system";

interface LandingEventBannerProps {
  eventInfoImg: string;
}

function LandingEventBanner({ eventInfoImg }: LandingEventBannerProps) {
  return (
    <>
      <Wrapper>
        <img src={eventInfoImg} alt="eventInfoImg" width="100%" />
      </Wrapper>
    </>
  );
}

export default LandingEventBanner;
