import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const AnimationSection = styled.section`
  .fade-in {
    animation: ${fadeIn} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

export default AnimationSection;
