import styled from "styled-components";
import { theme, Label } from "../../../../core/design_system";

function HighestScore({ score }: { score: number }) {
  return (
    <>
      <HighestScoreWrapper>
        <Label $token="Heading1Regular" color={theme.Color.TextIcon.sub}>
          내 최고 점수
        </Label>
        <Label $token="Title3Medium" color={theme.Color.TextIcon.sub}>
          {score}점
        </Label>
      </HighestScoreWrapper>
    </>
  );
}

export default HighestScore;

const HighestScoreWrapper = styled.div`
  width: 479px;
  height: 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 40px;
  background: rgba(183, 206, 97, 0.08);
`;
