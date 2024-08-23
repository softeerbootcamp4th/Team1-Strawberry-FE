import React from "react";
import styled from "styled-components";

interface WrapperStyleProps {
  $margin?: string;
  $padding?: string;

  width?: string;
  $maxwidth?: string;
  height?: string;
  $minheight?: string;
  $maxheight?: string;

  $backgroundcolor?: string;
  borderRadius?: string;

  $position?: string;
  $bottom?: string;
  left?: string;
  right?: string;
  $top?: string;
  $zindex?: string;

  display?: string;
  $flexdirection?: string;
  $gap?: string;

  $justifycontent?: string;
  $alignitems?: string;

  $boxsizing?: string;
}

interface WrapperProps extends WrapperStyleProps {
  children: React.ReactNode;
}

// forwardRef를 사용하여 ref를 전달받을 수 있도록 수정
const Wrapper = React.forwardRef<HTMLDivElement, WrapperProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledWrapper ref={ref} {...props}>
        {children}
      </StyledWrapper>
    );
  },
);

export default Wrapper;

const StyledWrapper = styled.div<WrapperStyleProps>`
  width: ${({ width }) => width || "100%"};
  ${({ $maxwidth }) => $maxwidth && `max-width: ${$maxwidth}`};
  height: ${({ height }) => height || "100%"};
  ${({ $minheight }) => $minheight && `min-height: ${$minheight}`};
  ${({ $maxheight }) => $maxheight && `max-height: ${$maxheight}`};

  ${({ $position }) => $position && `position: ${$position}`};

  margin: ${({ $margin }) => $margin || "0px"};
  padding: ${({ $padding }) => $padding || "0px"};

  ${({ $backgroundcolor }) =>
    $backgroundcolor && `background-color: ${$backgroundcolor}`};
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};

  ${({ $bottom }) => $bottom && `bottom: ${$bottom}`};
  ${({ left }) => left && `left: ${left}`};
  ${({ right }) => right && `right: ${right}`};
  ${({ $top }) => $top && `top: ${$top}`};
  ${({ $zindex }) => $zindex && `z-index: ${$zindex}`};

  ${({ display }) => display && `display: ${display}`};
  ${({ $flexdirection }) =>
    $flexdirection && `flex-direction: ${$flexdirection}`};
  ${({ $gap }) => $gap && `gap: ${$gap}`};
  ${({ $justifycontent }) =>
    $justifycontent && `justify-content: ${$justifycontent}`};
  ${({ $alignitems }) => $alignitems && `align-items: ${$alignitems}`};
  ${({ $boxsizing }) => $boxsizing && `box-sizing: ${$boxsizing}`};
`;
