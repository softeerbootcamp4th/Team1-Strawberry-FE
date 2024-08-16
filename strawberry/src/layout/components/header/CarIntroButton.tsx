import DefaultButton from "../../../core/design_system/styles/DefaultButton";
import styled from "styled-components";
import { Link } from "react-router-dom";

// link 태그 추가

function CarIntroButton() {
  return (
    <Link to="https://www.hyundai.com/kr/ko/e/vehicles/the-all-new-santafe/intro">
      <StyledButton>디 올 뉴 싼타페 보러가기</StyledButton>
    </Link>
  );
}

export default CarIntroButton;

const StyledButton = styled(DefaultButton)`
  ${({ theme }) => theme.Typography.Body1Regular};
  border: ${({ theme }) => `1px solid ${theme.Color.Border.strong}`};
  border-radius: ${({ theme }) => theme.Border.Radius0};
  color: ${({ theme }) => theme.Color.TextIcon.sub};
  padding: 8px 20px;
  width: fit-content;
`;
