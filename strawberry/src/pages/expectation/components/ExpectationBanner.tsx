import styled from "styled-components";
import expectationBG from "/src/assets/images/background/expectationBG.svg";

function ExpectationBanner() {
  return <StyledImg src={expectationBG} />;
}

export default ExpectationBanner;

const StyledImg = styled.img`
  z-index: 2;
  width: 1440px;
  height: 500px;
`;
