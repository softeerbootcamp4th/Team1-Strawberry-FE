import styled from "styled-components";
import { Label, Wrapper, theme } from "../../core/design_system";

import naverLoginButton from "/src/assets/images/login/naverLoginButton.svg";
import hyundaiLoginButton from "/src/assets/images/login/hyundaiLoginButton.svg";

import { useLogin } from "./hooks/useLogin";
import { throttle } from "../../core/utils";

function LoginPage() {
  const login = useLogin();

  const throttledLogin = throttle()((social: string) =>
    login({ social: social }),
  );

  return (
    <>
      <Wrapper
        height="calc(100vh - 330px)"
        display="flex"
        $flexdirection="column"
      >
        <Wrapper
          height="180px"
          $backgroundcolor={theme.Color.Ivory.ivory500}
          display="flex"
          $justifycontent="center"
          $alignitems="center"
          $padding="79px 0 0 0"
        >
          <Label $token="Display2Regular">로그인</Label>
        </Wrapper>
        <Wrapper
          display="flex"
          $flexdirection="column"
          $alignitems="center"
          $padding="85px 0 0 0"
        >
          <button onClick={() => throttledLogin("hyundai")}>
            <img src={hyundaiLoginButton} />
          </button>
          <StyledButton onClick={() => throttledLogin("naver")}>
            <img src={naverLoginButton} />
          </StyledButton>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default LoginPage;

const StyledButton = styled.button`
  margin-top: 12px;
`;
