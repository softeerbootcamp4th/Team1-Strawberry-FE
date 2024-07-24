import styled from "styled-components";
import HeaderMenuButtons from "./HeaderMenuButtons";
import HeaderLogo from "./HeaderLogo";
import LoginButton from "./LoginButton";
import CarIntroButton from "./CarIntroButton";

function Header() {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <HeaderLogo></HeaderLogo>
        <nav>
          <HeaderMenuButtons></HeaderMenuButtons>
        </nav>
        <ButtonWrapper>
          <LoginButton></LoginButton>
          <CarIntroButton></CarIntroButton>
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
  width: 277px;
  height: 100%;
  display: flex;
  margin-left: 70px;
  justify-content: space-between;
  align-items: center;
`;
