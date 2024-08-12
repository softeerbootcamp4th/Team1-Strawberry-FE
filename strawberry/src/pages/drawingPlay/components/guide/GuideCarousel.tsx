import React from "react";
import styled from "styled-components";

import ChevronLeft from "/src/assets/images/icons/chevron-prev.svg";
import ChevronRight from "/src/assets/images/icons/chevron-next.svg";

interface CarouselProps {
  children: React.ReactNode;
  curr: number;
  onSlideChange: (index: number) => void;
}

interface ControlButtonProps {
  disabled?: boolean;
}

interface SlidesWrapperProps {
  curr: number;
}

export function GuideCarousel({
  children,
  curr,
  onSlideChange,
}: CarouselProps) {
  const totalSlides = React.Children.count(children);

  const prev = () => onSlideChange(curr === 0 ? curr : curr - 1);
  const next = () => onSlideChange(curr === totalSlides - 1 ? curr : curr + 1);

  return (
    <CarouselContainer>
      <SlidesWrapper curr={curr}>
        {React.Children.map(children, (child, index) => (
          <Slide key={index}>{child}</Slide>
        ))}
      </SlidesWrapper>
      <Controls>
        <ControlButton onClick={prev} disabled={curr === 0}>
          <img src={ChevronLeft} width={40} />
        </ControlButton>
        <ControlButton onClick={next} disabled={curr === totalSlides - 1}>
          <img src={ChevronRight} width={40} />
        </ControlButton>
      </Controls>
    </CarouselContainer>
  );
}

export default GuideCarousel;

const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const SlidesWrapper = styled.div<SlidesWrapperProps>`
  display: flex;
  transition: transform ease-out 0.5s;
  transform: ${({ curr }) => `translateX(-${curr * 100}%)`};
`;

const Slide = styled.div`
  width: 100%;
  flex-shrink: 0;
`;

const Controls = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const ControlButton = styled.button<ControlButtonProps>`
  padding: 8px;
  color: #4a4a4a;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  background: transparent;
  border: none;
  outline: none;
`;
