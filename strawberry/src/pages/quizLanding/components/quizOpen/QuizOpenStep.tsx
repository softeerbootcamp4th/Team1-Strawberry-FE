import styled from "styled-components";

import { DotLine, Wrapper, theme } from "../../../../core/design_system";
import useQuizOpenStep from "../../hooks/useQuizOpenStep";

interface QuizOpenStepProps {
  total: number;
  current: number;
}

function QuizOpenStep(props: QuizOpenStepProps) {
  const { total, current } = props;
  const { isOpened, isClosed } = useQuizOpenStep();

  return (
    <Wrapper display="flex" height="38px">
      {Array.from({ length: total - 1 }, (_, index) => (
        <Wrapper display="flex" $alignitems="center">
          <Step
            key={index}
            $isFinished={isClosed(index, current)}
            $isSelected={isOpened(index, current)}
          >
            {isClosed(index, current)
              ? `${index + 1}차 마감`
              : `${index + 1}차 오픈`}
          </Step>
          <DotLine $backgroundcolor={theme.Color.Neutral.neutral90} />
        </Wrapper>
      ))}
      <Step $isSelected={total === current}>{total}차 오픈</Step>
    </Wrapper>
  );
}

export default QuizOpenStep;

interface StepStyle {
  $isSelected: boolean;
  $isFinished: boolean;
}

const Step = styled.div<StepStyle>`
  white-space: nowrap;
  ${({ theme }) => theme.Typography.Heading2Medium};

  height: 100%;
  padding: 0px 32px;
  margin: 0px 15px;

  display: flex;
  align-items: center;

  border-radius: 19px;

  color: ${({ theme }) => theme.Color.Neutral.neutral90};
  background-color: ${({ theme }) => theme.Color.Neutral.neutral99};
  border: ${({ theme }) => `1px solid ${theme.Color.Neutral.neutral90}`};

  ${({ $isSelected, theme }) =>
    $isSelected &&
    `
      color: ${theme.Color.TextIcon.reverse};
      box-shadow: 4px 2px 6px 0px rgba(0, 0, 0, 0.18);
      background-color: ${theme.Color.Neutral.neutral22};
    `}
  ${({ $isFinished, theme }) =>
    $isFinished &&
    `
      color: ${theme.Color.TextIcon.disable};
      box-shadow: 4px 2px 6px 0px rgba(0, 0, 0, 0.18);
      background-color: ${theme.Color.Neutral.neutral60};
    `}
`;
