import styled from "styled-components";
import { Label, theme, Wrapper, ImageEnum } from "../../../core/design_system";

import useNewCarCarousel from "../../login/hooks/useNewCarCarousel";
import { NewCarCarouselItem } from "../models/NewCarCarouselItem";

interface NewCarCarouselProps {
  datas: NewCarCarouselItem;
}

function NewCarCarousel(props: NewCarCarouselProps) {
  const { datas } = props;

  const length = datas.items.length;

  const { currentIndex, translationStep, handlePrev, handleNext } =
    useNewCarCarousel(length);

  return (
    <WholeWrapper>
      <CarouselContainer>
        <ContentWrapper xPosition={-currentIndex * translationStep}>
          <Wrapper height="100%" width="470px" $margin="0 177px 0 0">
            <Label $token="Display2Medium" color={theme.Color.TextIcon.default}>
              {item.title}
            </Label>
            <Label $token="Heading1Regular" color={theme.Color.TextIcon.sub}>
              {item.description}
            </Label>
          </Wrapper>
          <Wrapper
            display="flex"
            $alignitems="center"
            $margin="0 24px 0 0"
            width="fit-content"
          >
            {item.items.map((item, index) => (
              <Wrapper
                key={index}
                width="665px"
                $margin="0 48px 0 0"
                display="flex"
                $flexdirection="column"
              >
                <img width="100%" src={item.img} alt={`Slide ${index + 1}`} />
                <Label
                  $margin="26px 0 0 0"
                  $token="Title2Medium"
                  color={
                    item.isHint === true
                      ? "#FF8126"
                      : theme.Color.TextIcon.default
                  }
                >
                  {item.subTitle}
                </Label>
                <Label
                  $margin="12px 0 0 0"
                  $token="Heading2Regular"
                  color={theme.Color.TextIcon.sub}
                >
                  {item.subDescription}
                </Label>
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
