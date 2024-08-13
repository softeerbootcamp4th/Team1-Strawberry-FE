import styled from "styled-components";

import { Label, theme, Wrapper } from "../../../../core/design_system";

import GuideContent from "./GuideContent";

function DrawingGuideModal() {
  return (
    <>
      <ModalBackground>
        <Wrapper
          width="680px"
          height="650px"
          $margin="0 auto"
          display="flex"
          $padding="40px 44px 0 44px"
          $justifycontent="center"
          $backgroundcolor="white"
        >
          <Wrapper>
            <Label
              width="100%"
              $textalign="center"
              $token="Title3Medium"
              color={theme.Color.TextIcon.strong}
              $margin="0 0 40px 0"
            >
              게임 설명
            </Label>
            <GuideContent />
          </Wrapper>
        </Wrapper>
      </ModalBackground>
    </>
  );
}

export default DrawingGuideModal;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
