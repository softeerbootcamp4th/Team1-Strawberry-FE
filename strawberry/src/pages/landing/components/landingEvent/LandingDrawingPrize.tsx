import styled from "styled-components";

interface LandingDrawingPrizeProps {
  drawingPrizeImg: string;
}

function LandingDrawingPrize({ drawingPrizeImg }: LandingDrawingPrizeProps) {
  return (
    <>
      <StyledImg src={drawingPrizeImg} alt="ldrawingInfoImg" width="100%" />
    </>
  );
}

export default LandingDrawingPrize;

const StyledImg = styled.img`
  padding: 0;
  margin: 0;
`;
