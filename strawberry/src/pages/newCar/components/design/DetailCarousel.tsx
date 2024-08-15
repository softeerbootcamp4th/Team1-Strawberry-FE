import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "../../../common/components/carousel/Carousel";
import { DesignDetail } from "./NewCarDesignDetail";
import { Label, theme, Wrapper } from "../../../../core/design_system";

import DesignDetailButton from "/src/pages/newCar/components/design/DesignDetailButton.svg";
import XMark from "/src/pages/newCar/components/design/Close.svg";

interface DetailCarouselProps {
  detail: DesignDetail;
}

function DetailCarousel({ detail }: DetailCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <DetailCarouselWrapper>
      <Wrapper display="flex" $justifycontent="right" height="32px">
        <button>
          <img src={XMark} />
        </button>
      </Wrapper>
      <Wrapper
        display="flex"
        $flexdirection="column"
        $gap="4px"
        $maxheight="66px"
        $alignitems="center"
      >
        <Label
          $token="Title2Medium"
          color={theme.Color.TextIcon.default}
          $margin="0 0 4px 0"
        >
          {detail.title}
        </Label>
        <Label $token="Body1Medium" color={theme.Color.TextIcon.sub}>
          {detail.subTItle}
        </Label>
      </Wrapper>
      <Carousel curr={currentIndex} onSlideChange={handleSlideChange}>
        {detail.imageURL?.map((url, index) => (
          <img
            key={index}
            src={url}
            width="100%"
            alt={`Design detail ${index + 1}`}
          />
        ))}
      </Carousel>
      <Wrapper
        height="18px"
        display="flex"
        $position="absolute"
        $bottom="20px"
        $alignitems="center"
      >
        <img height="100%" src={DesignDetailButton} />
        <Label $token="CaptionRegular" color={theme.Color.TextIcon.sub}>
          를 누르면 다른 사양을 확인하실 수 있습니다.
        </Label>
      </Wrapper>
    </DetailCarouselWrapper>
  );
}

export default DetailCarousel;

const DetailCarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 24px;
  box-sizing: border-box;

  position: relative;

  border-radius: var(--Radius-Radius-12, 0px);
  border: 1px #66809f;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.6) -0.89%,
    rgba(255, 227, 219, 0.6) 99.11%
  );

  box-shadow: 0px 4.613px 34.6px 0px rgba(97, 129, 177, 0.2);
  backdrop-filter: blur(7.5px);
`;
