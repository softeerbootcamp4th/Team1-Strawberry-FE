import styled from "styled-components";
import Typography, { TypographyVariant } from "../foundation/typography";
import theme from "../theme";

interface LabelStyleProps {
  $token: TypographyVariant;
  color?: string;
  $textalign?: string;

  width?: string;
  $margin?: string;
}

interface LabelProps extends LabelStyleProps {
  children?: React.ReactNode;
}

function Label({ children, ...props }: LabelProps) {
  return <StyledLabel {...props}>{children}</StyledLabel>;
}

export default Label;

const StyledLabel = styled.p<LabelStyleProps>`
  width: ${({ width }) => width || "max-content"};
  ${({ $token }) => Typography[$token]};
  text-align: ${({ $textalign }) => $textalign || "left"};
  color: ${({ color }) => color || theme.Color.TextIcon.default};
  margin: ${({ $margin }) => $margin || "0px"};
`;
