import { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const SubmitProgress = ({ limitTime }) => {
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setIsMounted(false);
          setTimeout(() => {
            setProgress(0);
            setIsMounted(true);
          }, 100);
          return prevProgress;
        }
        return prevProgress + 100 / limitTime;
      });
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(interval);
  }, [limitTime]);

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

const SubmitProgressFill = styled.div`
  height: 100%;
  background-color: #002c5f;
  ${({ progress }) => css`
    transition: width 1s linear;
  `}
`;
