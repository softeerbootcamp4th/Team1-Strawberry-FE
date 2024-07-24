import DefaultButton from "../../../core/design_system/styles/DefaultButton";
import styled from "styled-components";

// onclick 나중에 추가

function LogoutButton() {
  return <StyledButton>로그아웃</StyledButton>;
}

export default LogoutButton;

const StyledButton = styled(DefaultButton)`
  background-color: ${({ theme }) => theme.Color.Primary.normal};
  ${({ theme }) => theme.Typography.Body1Regular};
  color: ${({ theme }) => theme.Color.TextIcon.default};
  padding: 8px 20px;
  width: 81px;
  height: 40px;
`;
