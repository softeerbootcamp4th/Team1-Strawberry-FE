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
  ${({ theme }) => theme.Typography.Title1Regular}
  align-self: center;
`;

const TotalStage = styled.p`
  color: var(--text-icon-assistive, #c2c4c8);
  text-align: center;
  ${({ theme }) => theme.Typography.Title2Regular}
  align-self: center;
`;
