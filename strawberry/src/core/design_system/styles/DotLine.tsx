import styled from "styled-components";

interface DotLineProps {
  $backgroundcolor: string;
}

function DotLine({ $backgroundcolor }: DotLineProps) {
  return <StyledDotLine $backgroundcolor={$backgroundcolor} />;
}

const StyledDotLine = styled.div<DotLineProps>`
  position: relative;
  height: 1px;
  width: 100%;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    background-image: radial-gradient(
      circle,
      ${({ $backgroundcolor }) => $backgroundcolor} 1.5px,
      transparent 1px
    );
    background-size: 15px 5px;
    background-repeat: repeat-x;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default DotLine;
