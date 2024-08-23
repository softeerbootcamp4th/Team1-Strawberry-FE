import React from "react";
import styled, { keyframes } from "styled-components";
import { ImageEnum } from "../../../../core/design_system";
import AnimText from "../../../../core/design_system/styles/AnimText";
import ScrollButton from "../../../common/components/buttons/scrollButton/ScrollButton";
import useLandingBanner from "../../../landing/hooks/useLandingBanner";

const moveAndScale = keyframes`
  0% {
    transform: translateX(70%) scale(0.5); /* Start off-screen and smaller */
  }
  100% {
    transform: translateX(0) scale(1); /* End at its original position and size */
  }
`;

// Define the kenburns-top animation
export const kenburnsTop = keyframes`
  0% {
    transform: scale(1) translateY(0);
    transform-origin: 50% 16%;
  }
  100% {
    transform: scale(1.25) translateY(-15px);
    transform-origin: top;
  }
`;

function NewCarBanner() {
  const { heightRef, scrollHeight } = useLandingBanner();

  // Calculate delay based on the first label's content and delay per character
  const firstLabelContent = "일상과 낭만 사이";
  const firstLabelDelay = 50; // delay in milliseconds
  const firstLabelTotalDuration = firstLabelContent.length * 50;

  return (
    <section>
      <RefWrapper ref={heightRef}>
        <AnimText
          content={firstLabelContent}
          delay={firstLabelDelay}
          tag={StyledEventNameLabel}
        />
        <AnimText
          content="The all-new SANTA FE"
          delay={30}
          tag={StyledCarNameLabel}
          startDelay={firstLabelTotalDuration}
        />
        <AnimatedBackgroundImg
          src={ImageEnum.IMAGES.NEWCAR.NEWCAR_BANNER_BACKGROUND}
        />
        <CarImg
          loading="lazy"
          src={ImageEnum.IMAGES.NEWCAR.NEWCAR_BANNER_CAR}
        />
        <ScrollButtonWrapper>
          <ScrollButton scrollHeight={scrollHeight} />
        </ScrollButtonWrapper>
      </RefWrapper>
    </section>
  );
}

export default NewCarBanner;

const RefWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
  overflow-y: hidden;

  background-color: ${({ theme }) => theme.Color.TextIcon.disable};
`;

const ScrollButtonWrapper = styled.div`
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
`;

const StyledEventNameLabel = styled.p`
  position: absolute;
  z-index: 5;
  top: 12%;
  left: 12%;
  color: ${({ theme }) => theme.Color.TextIcon.default};
  font-size: 70px;
  font-weight: 500;
  line-height: 138px;
  letter-spacing: -2px;
  white-space: nowrap; /* Ensure text does not wrap */
`;

const StyledCarNameLabel = styled.p`
  position: absolute;
  z-index: 4;
  top: 25%;
  left: 25%;
  color: ${({ theme }) => theme.Color.TextIcon.default};
  font-size: 120px;
  font-weight: 500;
  line-height: 133%;
  letter-spacing: -3.5px;
  opacity: 0.5;
  mix-blend-mode: overlay;
  white-space: nowrap; /* Ensure text does not wrap */
`;

// Apply the kenburns-top animation to the background image
const AnimatedBackgroundImg = styled.img`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  vertical-align: top;
  animation: ${kenburnsTop} 2s ease-out both; /* Apply the animation */
`;

const CarImg = styled.img`
  position: absolute;
  top: 28%;
  right: 17%; /* Start from the right side */
  z-index: 10;
  width: 66%;
  animation: ${moveAndScale} 1s ease-out forwards; /* Apply the animation */
`;
