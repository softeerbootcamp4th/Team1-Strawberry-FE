import React from "react";
import styled from "styled-components";

interface WrapperStyleProps {
  $margin?: string;
  $padding?: string;

  width?: string;
  height?: string;

  $backgroundcolor?: string;

  $position?: string;
  $bottom?: string;
  left?: string;
  right?: string;
  top?: string;

  display?: string;
  $gap?: string;

  $justifycontent?: string;
  $alignitems?: string;
}

interface WrapperProps extends WrapperStyleProps {
  children: React.ReactNode;
}

function Wrapper({ children, ...props }: WrapperProps) {
  return <StyledWrapper {...props}>{children}</StyledWrapper>;
}

export default Wrapper;

const StyledWrapper = styled.div<WrapperStyleProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};

  ${({ $position }) => $position && `position: ${$position}`};

  margin: ${({ $margin }) => $margin || "0px"};
  padding: ${({ $padding }) => $padding || "0px"};

  ${({ $backgroundcolor }) =>
    $backgroundcolor && `background-color: ${$backgroundcolor}`};

  ${({ $bottom }) => $bottom && `bottom: ${$bottom};`};
  ${({ left }) => left && `left: ${left};`};
  ${({ right }) => right && `right: ${right};`};
  ${({ top }) => top && `top: ${top};`};

  ${({ display }) => display && `display: ${display}`};
  ${({ $gap }) => $gap && `gap: ${$gap}`};
  ${({ $justifycontent }) =>
    $justifycontent && `justify-content: ${$justifycontent}`};
  ${({ $alignitems }) => $alignitems && `align-items: ${$alignitems}`};
`;
