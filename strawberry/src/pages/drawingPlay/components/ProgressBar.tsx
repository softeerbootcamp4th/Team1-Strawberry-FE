import styled from "styled-components";

import { theme, Wrapper } from "../../../core/design_system";

import useProgressBar from "../hooks/useProgressBar";

interface ProgressBarProps {
  timeLimit?: number;
  isProgress?: boolean;
}

const ProgressBar = ({
  timeLimit = 7,
  isProgress = false,
}: ProgressBarProps) => {
  const { progress, timer } = useProgressBar(timeLimit, isProgress);

  return (
    <Wrapper
      display="flex"
      $flexdirection="row"
      $justifycontent="center"
      $alignitems="center"
      $position="relative"
    >
      <Timer>{timer}</Timer>
      <Wrapper
        width="1000px"
        height="11px"
        $margin="0 0 0 20px"
        $backgroundcolor={theme.Color.Background.strong}
        borderRadius="10px"
      >
        <Progress width={progress} />
      </Wrapper>
    </Wrapper>
  );
};

export default ProgressBar;

const Progress = styled.div<{ width: number }>`
  width: ${({ width }) => width}%;
  height: 100%;
  background-color: #b2c73f;
  border-radius: 10px;
  transition: width 1s linear;
`;

const Timer = styled.p`
  color: var(--Text-Strong, #000);
  text-align: center;
  position: absolute;
  left: -20px;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: -1.25px;
`;
