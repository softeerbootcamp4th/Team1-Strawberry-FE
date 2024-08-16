import styled from "styled-components";
import { Label, theme, Wrapper } from "../../../core/design_system";

import arrow_left_default from "/src/assets/images/newCar/arrow_left_default.svg";
import arrow_left_disabled from "/src/assets/images/newCar/arrow_left_disabled.svg";
import arrow_right_default from "/src/assets/images/newCar/arrow_right_default.svg";
import arrow_right_disabled from "/src/assets/images/newCar/arrow_right_disabled.svg";

import useNewCarCarousel from "../../login/hooks/useNewCarCarousel";
import { NewCarCarouselData } from "../models/NewCarCarouselData";

interface NewCarCarouselProps {
  data: NewCarCarouselData;
}

function NewCarCarousel(props: NewCarCarouselProps) {
  const { data } = props;

  const length = data.imgs.length;
  const { currentIndex, translationStep, handlePrev, handleNext } =
    useNewCarCarousel(length);

  return (
    <WholeWrapper>
      <CarouselContainer>
        <ContentWrapper xPosition={-currentIndex * translationStep}>
          <Wrapper height="100%" width="470px" $margin="0 177px 0 0">
            <Label $token="Display2Medium" color={theme.Color.TextIcon.default}>
              {data.title}
            </Label>
            <Label $token="Heading1Regular" color={theme.Color.TextIcon.sub}>
              {data.description}
            </Label>
          </Wrapper>
          <Wrapper
            display="flex"
            $alignitems="center"
            $margin="0 24px 0 0"
            width="fit-content"
          >
            {data.imgs.map((url, index) => (
              <Wrapper key={index} $margin="0 48px 0 0">
                <img src={url} alt={`Slide ${index + 1}`} />
              </Wrapper>
            ))}
          </Wrapper>
        </ContentWrapper>
        <ButtonWrapper>
          <ArrowButton onClick={handlePrev}>
            <img
              src={
                currentIndex === 0 ? arrow_left_disabled : arrow_left_default
              }
              alt="Previous"
            />
          </ArrowButton>
          <ArrowButton onClick={handleNext}>
            <img
              src={
                currentIndex === length - 1
                  ? arrow_right_disabled
                  : arrow_right_default
              }
              alt="Next"
            />
          </ArrowButton>
        </ButtonWrapper>
      </CarouselContainer>
    </WholeWrapper>
  );
}

export default NewCarCarousel;

const WholeWrapper = styled.div`
  padding-left: calc((100% - 1440px) / 2);
`;

const CarouselContainer = styled.div`
  position: relative;
  box-sizing: content-box;
  height: 626px;
  overflow: hidden;
`;

const ContentWrapper = styled.div<{ xPosition: number }>`
  display: flex;
  transform: translateX(${(props) => props.xPosition}px);
  transition: transform 0.5s ease-in-out;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: -8px;
  display: flex;
  gap: 10px;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  user-select: none;
  transition: color 0.3s;
`;
