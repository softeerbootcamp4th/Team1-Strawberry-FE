import {
  Label,
  theme,
  Wrapper,
  ImageEnum,
} from "../../../../core/design_system";

import landingDrawingEvent from "/src/assets/images/temp/LandingDrawingEvent.svg";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function LandingDrawingEvent() {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper $position="relative">
        <img src={landingDrawingEvent} alt="landingDrawingEvent" width="100%" />
        <StyledButton onClick={() => navigate("/drawing")}>
          <Label $token="Title3Regular" color={theme.Color.Common.black}>
            이벤트 참여하기
          </Label>
          <img
            src={ImageEnum.ICONS.UPPERRIGHTBUTTON}
            alt="upperRightButton"
            width="59px"
            height="59px"
          />
        </StyledButton>
      </Wrapper>
    </>
  );
}

export default LandingDrawingEvent;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${(723 / 942) * 100}%;
  right: ${(253.96 / 1920) * 100}%;
  height: fit-content;
`;
