import styled from "styled-components";
import landingDrawingPrize from "/src/assets/images/temp/LandingDrawingPrize.svg";

function LandingDrawingPrize() {
  return (
    <>
      <StyledImg
        src={landingDrawingPrize}
        alt="landingDrawingPrize"
        width="100%"
      />
    </>
  );
}

export default LandingDrawingPrize;

const StyledImg = styled.img`
  padding: 0;
  margin: 0;
`;
