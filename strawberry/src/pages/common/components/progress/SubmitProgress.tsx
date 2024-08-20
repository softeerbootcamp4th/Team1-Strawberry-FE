import styled from "styled-components";

import { useSubmitProgress } from "../../hooks/useSubmitProgress";

interface SubmitProgressProps {
  limitTime: number;
}

const SubmitProgress = ({ limitTime }: SubmitProgressProps) => {
  const { progress, isMounted } = useSubmitProgress(limitTime);

  return (
    <SubmitProgressContainer>
      {isMounted && (
        <SubmitProgressFill
          progress={progress}
          style={{ width: `${progress}%` }}
        />
      )}
    </SubmitProgressContainer>
  );
};

export default SubmitProgress;

const SubmitProgressContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #d3d3d3;
  border-radius: 10px;
  overflow: hidden;
`;

const SubmitProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  background-color: #002c5f;
  transition: width 1s linear;
`;
