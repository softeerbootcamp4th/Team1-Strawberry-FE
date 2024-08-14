import styled from "styled-components";
import { Wrapper } from "../../../../core/design_system";
import { Point } from "../../../drawingPlay/models";
import DesignDetail from "/src/pages/newCar/components/design/DesignDetail.svg";

interface DesignDetail {
  title: string;
  subTItle: string | undefined;
  imageURL: string[] | undefined;
}

interface NewCarDesignDetailProps {
  coordinates: Point[];
  backgroundImg: string;
  designDetails: DesignDetail[];
}

function NewCarDesignDetail(props: NewCarDesignDetailProps) {
  const { coordinates, backgroundImg, designDetails } = props;
  return (
    <Wrapper>
      {coordinates.map((coordinate, index) => (
        <StyledButton key={index} x={coordinate.x} y={coordinate.y}>
          <img src={DesignDetail} alt={`Design detail ${index + 1}`} />
        </StyledButton>
      ))}
    </Wrapper>
  );
}

export default NewCarDesignDetail;

const StyledButton = styled.button<{ x: number; y: number }>`
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
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
