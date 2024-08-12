import styled from "styled-components";

import { Wrapper } from "../../../../core/design_system";

import { guides } from "../../models/Guide";

import { useDrawingPlayState } from "../../hooks/useDrawingPlayState";
import { useDrawingPlayDispatch } from "../../hooks/useDrawingPlayDispatch";

import DrawingCanvas from "./DrawingCanvas";
import GuideCarousel from "./GuideCarousel";

interface IndicatorProps {
  active: boolean;
  onClick: () => void;
}

function GuideCarouselWrapper() {
  const { guideIndex } = useDrawingPlayState();
  const dispatch = useDrawingPlayDispatch();

  const handleSlideChange = (index: number) => {
    dispatch({ type: "SET_GUIDE_INDEX", payload: index });
  };

  return (
    <Wrapper height="440px" $position="relative">
      <GuideCarousel curr={guideIndex} onSlideChange={handleSlideChange}>
        {guides.slice(0, guides.length - 1).map((guide, index) => (
          <Wrapper key={index} width="100%" $margin="0 auto">
            <img width="100%" src={guide.image} />
          </Wrapper>
        ))}
        <DrawingCanvas />
      </GuideCarousel>
      <Indicators>
        {guides.slice(0, guides.length).map((_, i) => (
          <Indicator
            key={i}
            active={guideIndex === i}
            onClick={() => handleSlideChange(i)}
          />
        ))}
      </Indicators>
    </Wrapper>
  );
}

export default GuideCarouselWrapper;

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
