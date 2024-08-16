import React from "react";
import styled from "styled-components";

import { Wrapper, ImageEnum } from "../../../../core/design_system";

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

interface IndicatorProps {
  active: boolean;
  onClick: () => void;
}

export function Carousel({ children, curr, onSlideChange }: CarouselProps) {
  const totalSlides = React.Children.count(children);

  const prev = () => onSlideChange(curr === 0 ? curr : curr - 1);
  const next = () => onSlideChange(curr === totalSlides - 1 ? curr : curr + 1);

  return (
    <Wrapper height="fit-content">
      <CarouselContainer>
        <SlidesWrapper curr={curr}>
          {React.Children.map(children, (child, index) => (
            <Slide key={index}>{child}</Slide>
          ))}
        </SlidesWrapper>
        <LeftControlButton onClick={prev} disabled={curr === 0}>
          <img src={ImageEnum.ICONS.CHEVRON_PREV} width={40} />
        </LeftControlButton>
        <RightControlButton onClick={next} disabled={curr === totalSlides - 1}>
          <img src={ImageEnum.ICONS.CHEVRON_NEXT} width={40} />
        </RightControlButton>
      </CarouselContainer>
      <Indicators>
        {Array.from({ length: totalSlides }).map((_, i) => (
          <Indicator
            key={i}
            active={curr === i}
            onClick={() => onSlideChange(i)}
          />
        ))}
      </Indicators>
    </Wrapper>
  );
}

export default Carousel;

const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: fit-content;
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

const ControlButton = styled.button<ControlButtonProps>`
  padding: 8px;
  color: #4a4a4a;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  background: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 145px;
`;

const LeftControlButton = styled(ControlButton)`
  left: 16px;
  padding: 0;
`;

const RightControlButton = styled(ControlButton)`
  right: 16px;
  padding: 0;
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
`;

const Indicator = styled.div<IndicatorProps>`
  width: ${({ active }) => (active ? "14px" : "12px")};
  height: ${({ active }) => (active ? "14px" : "12px")};
  background-color: ${({ theme }) => theme.Color.Neutral.neutral90};
  border-radius: 50%;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
