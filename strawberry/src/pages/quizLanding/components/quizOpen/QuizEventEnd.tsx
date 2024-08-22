import styled from "styled-components";
import { theme, Label } from "../../../../core/design_system";

function QuizEventEnd() {
  return (
    <>
      <StyledDiv>
        <Label $token="Display1Medium" color={theme.Color.Common.white}>
          모든 이벤트가 종료되었습니다.
        </Label>
      </StyledDiv>
    </>
  );
}

export default QuizEventEnd;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.Color.Dimmer.default};
  backdrop-filter: blur(2px);
`;
