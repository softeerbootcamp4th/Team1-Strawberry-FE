import styled from "styled-components";

import { theme, Label } from "../../../../core/design_system";

import { useDrawingLandingState } from "../../hooks/useDrawingLandingState";

function MyDrawingScore() {
  const { eventUserData } = useDrawingLandingState();

  return (
    <MyScore>
      <Label $token="Heading1Regular" color={theme.Color.TextIcon.sub}>
        내 최고 점수
      </Label>
      <Label $token="Title3Medium" color={theme.Color.TextIcon.strong}>
        {Number(eventUserData?.gameScore.toFixed(1))}점
      </Label>
    </MyScore>
  );
}

export default MyDrawingScore;

const MyScore = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 60px 0 60px;
  border: ${({ theme }) => `2px solid ${theme.Color.Event.drawing_default}`};
  background: rgba(183, 206, 97, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 73px;
  margin: 36px 0;
`;
