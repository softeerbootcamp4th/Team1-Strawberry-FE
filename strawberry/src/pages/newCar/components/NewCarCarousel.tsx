import styled from "styled-components";
import { Label, theme, Wrapper, ImageEnum } from "../../../core/design_system";

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
                currentIndex === 0
                  ? ImageEnum.ICONS.ARROW_LEFT_DISABLED
                  : ImageEnum.ICONS.ARROW_LEFT_DEFAULT
              }
              alt="Previous"
            />
          </ArrowButton>
          <ArrowButton onClick={handleNext}>
            <img
              src={
                currentIndex === length - 1
                  ? ImageEnum.ICONS.ARROW_RIGHT_DISABLED
                  : ImageEnum.ICONS.ARROW_RIGHT_DEFAULT
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
