import { Wrapper } from "../../../../core/design_system";

interface LandingIntroduceProps {
  landingIntroduceImg: string;
}

function LandingIntroduce({ landingIntroduceImg }: LandingIntroduceProps) {
  return (
    <>
      <Wrapper>
        <img src={landingIntroduceImg} alt="landingIntroduceImg" width="100%" />
      </Wrapper>
    </>
  );
}

export default LandingIntroduce;
