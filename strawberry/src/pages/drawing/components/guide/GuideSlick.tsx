import { useState } from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick"; // TypeScript에서 react-slick의 타입을 가져옴
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { theme, Label, Wrapper } from "../../../../core/design_system";
import ModalButton from "../../../common/components/buttons/ModalButton";

import CheckBoxFilled from "/src/assets/images/icons/checkbox-fill.svg";
import CheckBoxUnFilled from "/src/assets/images/icons/checkbox-unfill.svg";
import ChevronNext from "/src/assets/images/icons/chevron-next.svg";
import ChevronPrev from "/src/assets/images/icons/chevron-prev.svg";

import { guides } from "../../models/Guide";

import Arrow from "./SlickArrow";
import GuideImage from "./GuideImage";
import DrawingCanvas from "./DrawingCanvas";

function GuideSlick() {
  const [isCheck, toggleCheck] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <Arrow icon={ChevronNext} />,
    prevArrow: <Arrow icon={ChevronPrev} />,
    beforeChange: (_current: number, next: number) => setCurrentIndex(next),
  };

  return (
    <Wrapper $position="relative">
      <Label
        width="100%"
        $textalign="center"
        $token="Heading1Regular"
        color={theme.Color.TextIcon.default}
        $margin="0 0 28px 0"
      >
        {guides[currentIndex].description}
      </Label>
      <StyledSlider {...settings}>
        {guides.slice(0, guides.length - 1).map((guide, index) => (
          <GuideImage
            key={index}
            image={guide.image}
            description={guide.description}
          />
        ))}
        <DrawingCanvas />
      </StyledSlider>
      <CheckBoxButton onClick={() => toggleCheck(!isCheck)}>
        <img src={isCheck ? CheckBoxFilled : CheckBoxUnFilled} />
        <Label $token="Body2Regular" color={theme.Color.TextIcon.info}>
          다시 보지 않기
        </Label>
      </CheckBoxButton>
      <ModalButton modalType="WHITE_LARGE" content="닫기" />
    </Wrapper>
  );
}

export default GuideSlick;

const CheckBoxButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;

  position: absolute;
  right: 0;
  bottom: 165px;
`;

const StyledSlider = styled(Slider)`
  .slick-dots li button:before {
    font-size: 10px;
  }

  .slick-arrow {
    width: 24px;
    height: 48px;

    &.slick-prev {
      left: -35px;
    }

    &.slick-next {
      right: -35px;
    }

    &.slick-disabled {
      opacity: 0.5;
    }
  }

  margin-bottom: 90px;
`;
