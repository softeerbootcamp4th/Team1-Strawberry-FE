import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../../../../core/design_system";
import { Point } from "../../../drawingPlay/models";
import DesignDetailButton from "/src/pages/newCar/components/design/DesignDetailButton.svg";
import DetailCarousel from "./DetailCarousel";

export interface DesignDetail {
  title: string;
  subTItle: string | undefined;
  imageURL: string[] | undefined;
}

const backgroundImgData: string =
  "/src/pages/newCar/components/design/ExteriorDetailBackground.svg";

const detailData: DesignDetail = {
  title: "라디에이터 & 인테이크 그릴",
  subTItle: undefined,
  imageURL: [
    "/src/pages/newCar/components/design/Property 1=exterior_front_01.svg",
  ],
};

const coordinatesData: Point[] = [
  { x: 146, y: 313 },
  { x: 289, y: 317 },
  { x: 420, y: 313 },
  { x: 520, y: 446 },
];

const NewCarDesignDetail: React.FC = () => {
  const imageContainerRef = useRef<HTMLImageElement | null>(null);
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>(
    { width: 0, height: 0 },
  );

  useEffect(() => {
    const image = imageContainerRef.current;

    const updateSize = () => {
      if (image) {
        setImageSize({
          width: image.clientWidth,
          height: image.clientHeight,
        });
      }
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const getPositionStyle = (x: number, y: number) => {
    const { width, height } = imageSize;

    if (width === 0 || height === 0) return { left: "0%", top: "0%" };

    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    return { left: `${xPercent}%`, top: `${yPercent}%` };
  };

  return (
    <Wrapper $position="relative" height="fit-content">
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
            <img src={DesignDetailButton} alt={`Design detail ${index + 1}`} />
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
};

export default NewCarDesignDetail;

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
