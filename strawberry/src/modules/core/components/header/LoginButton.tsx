import { Link } from "react-router-dom";
import DefaultButton from "../../design_system/styles/DefaultButton";
import styled from "styled-components";

// link 태그 추가

function LoginButton() {
  return (
    <Link to="/login">
      <StyledButton>로그인</StyledButton>
    </Link>
  );
}

export default LoginButton;

const StyledButton = styled(DefaultButton)`
  background-color: ${({ theme }) => theme.Color.Primary.normal};
  font-size: ${({ theme }) => theme.Typography.Body1Regular};
  color: ${({ theme }) => theme.Color.TextIcon.reverse};
  padding: 8px 20px;
  width: 81px;
  height: 40px;
`;
