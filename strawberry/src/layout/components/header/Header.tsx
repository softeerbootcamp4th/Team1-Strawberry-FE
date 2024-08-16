import styled from "styled-components";
import HeaderMenuButtons from "./HeaderMenuButtons";
import HeaderLogo from "./HeaderLogo";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import CarIntroButton from "./CarIntroButton";

import { useGlobalState } from "../../../core/hooks/useGlobalState";

function Header() {
  const { isLogin } = useGlobalState();

  return (
    <StyledHeader>
      <HeaderWrapper>
        <HeaderLogo></HeaderLogo>
        <nav>
          <HeaderMenuButtons />
        </nav>
        <ButtonWrapper>
          {!isLogin && <LoginButton />}
          {isLogin && <LogoutButton />}
          <CarIntroButton />
        </ButtonWrapper>
      </HeaderWrapper>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  ${({ theme }) => theme.Shadow.Normal};
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  width: 1440px;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  gap: 8px;
  height: 100%;
  display: flex;
  margin-left: 70px;
  justify-content: space-between;
  align-items: center;
`;
