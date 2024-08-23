import React from "react";
import styled, { keyframes } from "styled-components";
import {
  ImageEnum,
  Label,
  theme,
  Wrapper,
} from "../../../../core/design_system";
import Carousel from "../../../common/components/carousel/Carousel";
import { DesignDetail, DesignType } from "../../models";
import { useDesignDetailCarousel } from "../../hooks/useDesignDetailCarousel";
import {
  getDesignDetailTitle,
  getDesignDetailSubtitle,
} from "../../services/designDetailCarouselService";

// Define the flip-in-ver-left animation
const flipInVerLeft = keyframes`
  0% {
    transform: rotateY(80deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
`;

interface DesignDetailCarouselProps {
  designType: DesignType;
  detail: DesignDetail[];
}

function DesignDetailCarousel({
  designType,
  detail,
}: DesignDetailCarouselProps) {
  const { carouselIndex, handleClose, handleSlideChange } =
    useDesignDetailCarousel(designType);

  return (
    <DetailCarouselWrapper>
      <Wrapper display="flex" $justifycontent="right" height="32px">
        <button onClick={handleClose}>
          <img loading="lazy" src={ImageEnum.ICONS.CLOSE} />
        </button>
      </Wrapper>
      <Wrapper
        display="flex"
        $flexdirection="column"
        $gap="4px"
        height="fit-content"
        $alignitems="center"
      >
        <Label
          $token="Title2Medium"
          color={theme.Color.TextIcon.default}
          $margin="0 0 4px 0"
        >
          {getDesignDetailTitle(detail, carouselIndex)}
        </Label>
        <Label
          $token="Body1Medium"
          color={theme.Color.TextIcon.sub}
          $margin="0 0 20px 0"
        >
          {getDesignDetailSubtitle(detail, carouselIndex)}
        </Label>
      </Wrapper>
      <Wrapper $position="relative" $padding="0 0 56px 0" height="min-content">
        <Carousel
          type="DESIGN"
          curr={carouselIndex}
          onSlideChange={handleSlideChange}
        >
          {detail.map((item, index) => (
            <CarouselSlide key={index}>
              <img
                loading="lazy"
                src={item.imageURL}
                width="100%"
                alt={`Design detail ${index + 1}`}
              />
            </CarouselSlide>
          ))}
        </Carousel>
      </Wrapper>
      <Wrapper height="18px" display="flex" $alignitems="center">
        <img loading="lazy" height="200%" src={ImageEnum.ICONS.DESIGNDETAIL} />
        <Label $token="CaptionRegular" color={theme.Color.TextIcon.sub}>
          를 누르면 다른 사양을 확인하실 수 있습니다.
        </Label>
      </Wrapper>
    </DetailCarouselWrapper>
  );
}

export default DesignDetailCarousel;

const DetailCarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 24px;
  box-sizing: border-box;

  border-radius: 12px;
  border: 1px #66809f;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.6) -0.89%,
    rgba(255, 227, 219, 0.6) 99.11%
  );

  box-shadow: 0px 4.613px 34.6px 0px rgba(97, 129, 177, 0.2);
  backdrop-filter: blur(7.5px);

  animation: ${flipInVerLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const CarouselSlide = styled.div`
  flex: 0 0 100%;
  box-sizing: border-box;
`;
