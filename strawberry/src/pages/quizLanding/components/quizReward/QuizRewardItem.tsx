import styled from "styled-components";

import { Wrapper } from "../../../../core/design_system";
interface QuizRewardItemProps {
  isClosed: boolean;
  image: string;
}

function QuizRewardItem(props: QuizRewardItemProps) {
  const { isClosed, image } = props;

  return (
    <Wrapper
      width="348px"
      height="fit-content"
      $position="relative"
      borderRadius="6px"
    >
      {isClosed && (
        <Dimmer>
          <ClosedMark>선착순 마감</ClosedMark>
        </Dimmer>
      )}
      <img width="100%" height="100%" src={image} alt="Quiz Reward" />
    </Wrapper>
  );
}

export default QuizRewardItem;

const Dimmer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.Color.Dimmer.default};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border-radius: 6px;
`;

const ClosedMark = styled.div`
  display: inline-flex;
  transform: rotate(-15deg);
  padding: 24px 48px;
  justify-content: center;
  align-items: center;
  border-radius: 82px;
  background: rgba(0, 0, 0, 0.22);
  box-shadow:
    0px 4px 2px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset;
  backdrop-filter: blur(2px);

  ${({ theme }) => theme.Typography.Display2Medium};
  color: ${({ theme }) => theme.Color.TextIcon.reverse};
`;
