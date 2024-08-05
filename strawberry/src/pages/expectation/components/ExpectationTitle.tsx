import styled from "styled-components";
import { theme, Label } from "../../../core/design_system";

function ExpectationTitle() {
  return (
    <>
      <TitleWrapper>
        <Label
          width="fit-content"
          $token="Display2Medium"
          color={theme.Color.TextIcon.default}
          $margin="81px 0 0 0"
        >
          기대평
        </Label>
      </TitleWrapper>
    </>
  );
}

export default ExpectationTitle;

const TitleWrapper = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  top: 0;
  justify-content: center;
  background-color: ${theme.Color.Blue.blue100};
  position: absolute;
  z-index: 1;
`;
