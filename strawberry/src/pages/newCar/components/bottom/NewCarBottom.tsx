import styled from "styled-components";
import { Label, theme } from "../../../../core/design_system";
import { Link } from "react-router-dom";

function NewCarBottom() {
  return (
    <NewCarBottomWrapper>
      <StyledButton
        as={Link}
        to="https://www.hyundai.com/kr/ko/e/vehicles/the-all-new-santafe/intro"
      >
        <Label $token="Heading2Regular" color={theme.Color.TextIcon.reverse}>
          디 올 뉴 싼타페 자세히 보기
        </Label>
      </StyledButton>
    </NewCarBottomWrapper>
  );
}

export default NewCarBottom;

const NewCarBottomWrapper = styled.div`
  height: 246px;
  background: transparent;
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
  text-decoration: none;
  color: inherit;
`;
