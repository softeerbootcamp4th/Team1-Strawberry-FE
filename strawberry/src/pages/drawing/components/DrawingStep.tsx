import styled from "styled-components";
import { Wrapper } from "../../../core/design_system";

import drawingStepBG from "/src/assets/images/background/drawingStepBG.svg";

function DrawingStep({ now, total }: { now: number; total: number }) {
  return (
    <>
      <Wrapper $position="relative" $zindex="10" left="-570px" $top="-60px">
        <Wrapper $position="absolute" display="flex" $justifycontent="center">
          <NowStage>{now}단계</NowStage>
          <TotalStage>/{total}단계</TotalStage>
        </Wrapper>
        <img src={drawingStepBG} alt="" />
      </Wrapper>
    </>
  );
}

export default DrawingStep;

const NowStage = styled.p`
  color: var(--text-icon-reverse, #fff);
  text-align: center;
  font-family: "Ownglyph noocar";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 76% */
  letter-spacing: -1.25px;
  align-self: center;
`;

const TotalStage = styled.p`
  color: var(--text-icon-assistive, #c2c4c8);
  text-align: center;
  font-family: "Ownglyph noocar";
  font-size: 29px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 131.034% */
  letter-spacing: -0.725px;
  align-self: center;
`;
