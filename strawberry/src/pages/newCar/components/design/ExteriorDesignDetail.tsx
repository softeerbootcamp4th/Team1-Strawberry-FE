import styled from "styled-components";

import { Wrapper } from "../../../../core/design_system";

import { useExteriorDesignDetail } from "../../hooks/useExteriorDesignDetail";

import { ExteriorType } from "../../models";

import DetailCarousel from "./DetailCarousel";
import FoundationRadioButtons from "../FoundationRadioButton";

function ExteriorDesignDetail() {
  const {
    buttons,
    actionCreator,
    selector,
    imageContainerRef,
    getPositionStyle,
    coordinatesData,
    backgroundImgData,
    detailData,
  } = useExteriorDesignDetail();

  return (
    <Wrapper $position="relative" height="fit-content">
      <FoundationRadioButtons<ExteriorType>
        buttons={buttons}
        actionCreator={actionCreator}
        selector={selector}
      />
      <img
        ref={imageContainerRef}
        width="100%"
        src={backgroundImgData}
        alt="Background"
      />
      {coordinatesData.map((coordinate, index) => {
        const { x, y } = coordinate;
        const positionStyle = getPositionStyle(x, y);

        return (
          <StyledButton key={index} style={positionStyle}>
            <img src="" alt={`Design detail ${index + 1}`} />
          </StyledButton>
        );
      })}
      <Wrapper
        $position="absolute"
        $top="0"
        right="0"
        width="42%"
        $padding="21px 16px"
        $boxsizing="border-box"
      >
        <DetailCarousel detail={detailData} />
      </Wrapper>
    </Wrapper>
  );
}

export default ExteriorDesignDetail;

const StyledButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease;
  }

  img {
    display: block;
  }
`;
