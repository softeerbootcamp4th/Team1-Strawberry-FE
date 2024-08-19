import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Wrapper, Label } from "../../../../core/design_system";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper
        height="calc(100vh - 70px)"
        display="flex"
        $flexdirection="column"
      >
        <ContentWrapper>
          <Label $token="Display1Medium">페이지를 찾을 수 없습니다.</Label>
          <Label $margin="30px 0 0 0" $token="Heading1Medium">
            주소를 잘못 입력했거나 페이지가 이동했을 수 있습니다.
          </Label>
          <Wrapper
            $margin="70px 0 0 0"
            width="100%"
            height="fit-content"
            display="flex"
            $justifycontent="center"
          >
            <Button onClick={() => navigate("/")}>홈으로</Button>
          </Wrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Color.Ivory.ivory500};
`;

export default NotFound;

const Button = styled.button`
  box-sizing: border-box;
  width: fit-content;
  padding: 16px 96px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  background-color: ${({ theme }) => theme.Color.Primary.normal};
  color: ${({ theme }) => theme.Color.Common.white};
  border: 1px solid ${({ theme }) => theme.Color.Border.strong};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;
