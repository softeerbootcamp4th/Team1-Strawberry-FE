import styled from "styled-components";

import { ImageEnum, Wrapper } from "../../../../core/design_system";

import { DesignType, ExteriorType } from "../../models";

import { useDesignDetailByType } from "../../hooks/useDesignDetail";

import { getPositionStyle } from "../../services/getPositionStyle";

import DesignDetailCarousel from "./DesignDetailCarousel";
import FoundationRadioButtons from "../FoundationRadioButton";

interface DesignDetailProps {
  designType: DesignType;
}

function DesignDetail(props: DesignDetailProps) {
  const { designType } = props;

  const {
    buttons,
    actionCreator,
    selector,
    handleCoordinatesClick,
    backgroundImg,
    detailCoordinates,
    detailData,
  } = useDesignDetailByType(designType);

  return (
    <Wrapper height="fit-content">
      <Wrapper
        width="fit-content"
        height="fit-content"
        $margin="0 auto"
        $padding={designType === "EXTERIOR" ? "24px 0 32px 0" : "0 0 32px 0"}
      >
        {buttons && actionCreator && selector && (
          <FoundationRadioButtons<ExteriorType>
            buttons={buttons}
            actionCreator={actionCreator}
            selector={selector}
          />
        )}
      </Wrapper>
      <Wrapper $position="relative">
        <img width="100%" src={backgroundImg} alt="Background" />
        {detailCoordinates.map((coordinate, index) => {
          const { x, y } = coordinate;
          const positionStyle = getPositionStyle(x, y);

          return (
            <StyledButton
              key={index}
              style={positionStyle}
              onClick={() => handleCoordinatesClick(index)}
            >
              <img
                src={ImageEnum.ICONS.DESIGNDETAIL}
                alt={`Design detail ${index + 1}`}
              />
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
          {detailData && (
            <DesignDetailCarousel designType={designType} detail={detailData} />
          )}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default DesignDetail;

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
