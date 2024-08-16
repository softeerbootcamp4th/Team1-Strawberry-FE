import DefaultButton from "../../../core/design_system/styles/DefaultButton";
import styled from "styled-components";
import { useGlobalDispatch } from "../../../core/hooks/useGlobalDispatch";

function LogoutButton() {
  const dispatch = useGlobalDispatch();

  function handleLogout() {
    localStorage.removeItem("accessToken");
    dispatch({ type: "SET_LOGIN", status: false });
    location.reload();
  }

  return <StyledButton onClick={handleLogout}>로그아웃</StyledButton>;
}

export default LogoutButton;

const StyledButton = styled(DefaultButton)`
  ${({ theme }) => theme.Typography.Body1Regular};
  color: ${({ theme }) => theme.Color.TextIcon.default};
  padding: 8px 20px;
  white-space: nowrap;
`;
