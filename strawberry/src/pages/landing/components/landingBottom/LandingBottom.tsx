import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Label, theme, ImageEnum } from "../../../../core/design_system";

function LandingBottom() {
  const navigate = useNavigate();

  return (
    <>
      <LandingBottomWrapper>
        <StyledButton onClick={() => navigate("/expectation")}>
          <Label $token="Heading2Regular" color={theme.Color.TextIcon.reverse}>
            디 올 뉴 싼타페 기대평 남기러 가기
          </Label>
          <img
            src={ImageEnum.ICONS.ARROW_RIGHT_L_WHITE}
            alt="arrowRightBoldWhite"
            width="20px"
          />
        </StyledButton>
      </LandingBottomWrapper>
    </>
  );
}

export default LandingBottom;

const LandingBottomWrapper = styled.div`
  height: 220px;
  background-color: ${({ theme }) => theme.Color.Background.strong};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  display: flex;
  width: 400px;
  padding: 12px 28px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Color.Primary.normal};
  gap: 12px;
`;
