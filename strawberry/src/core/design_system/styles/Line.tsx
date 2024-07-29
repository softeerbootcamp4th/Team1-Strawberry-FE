import styled from "styled-components";
import theme from "../theme";

interface LineProps {
  $backgroundcolor?: string;
  width?: string;
}

function Line({
  $backgroundcolor = theme.Color.Common.white,
  width = "100%",
}: LineProps) {
  return <StyledLine $backgroundcolor={$backgroundcolor} width={width} />;
}

export default Line;

const StyledLine = styled.div<{ $backgroundcolor: string; width: string }>`
  background-color: ${({ $backgroundcolor }) => $backgroundcolor};
  height: 1px;
  width: ${({ width }) => width};
`;
