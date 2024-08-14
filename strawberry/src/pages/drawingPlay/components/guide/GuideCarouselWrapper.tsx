import styled from "styled-components";

import { Wrapper } from "../../../../core/design_system";
import Carousel from "../../../common/components/carousel/Carousel";

import { guides } from "../../models/Guide";

import { useDrawingPlayState } from "../../hooks/useDrawingPlayState";
import { useDrawingPlayDispatch } from "../../hooks/useDrawingPlayDispatch";

import DrawingPractice from "./DrawingPractice";

function GuideCarouselWrapper() {
  const { guideIndex } = useDrawingPlayState();
  const dispatch = useDrawingPlayDispatch();

  const handleSlideChange = (index: number) => {
    dispatch({ type: "SET_GUIDE_INDEX", payload: index });
  };

  const visibleGuides = guides.slice(0, guides.length - 1);

  return (
    <Wrapper height="440px" $position="relative">
      <Carousel curr={guideIndex} onSlideChange={handleSlideChange}>
        {visibleGuides.map((guide, index) => (
          <GuideSlide key={index}>
            <img width="100%" src={guide.image} alt={`Guide ${index + 1}`} />
          </GuideSlide>
        ))}
        <Wrapper
          $position="relative"
          display="flex"
          $justifycontent="center"
          $alignitems="center"
        >
          <DrawingCanvasWrapper>
            <DrawingPractice timeLimit={3} />
          </DrawingCanvasWrapper>
        </Wrapper>
      </Carousel>
    </Wrapper>
  );
}

export default GuideCarouselWrapper;

const DrawingCanvasWrapper = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
`;

const GuideSlide = styled(Wrapper)`
  width: 100%;
  margin: 0 auto;
`;
