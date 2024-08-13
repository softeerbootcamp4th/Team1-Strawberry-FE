import styled from "styled-components";
import { Label, theme, Wrapper } from "../../../../core/design_system";

import popover from "/src/assets/images/icons/popover.svg";
import close from "/src/assets/images/icons/close_gray.svg";

interface HintPopoverProps {
  setClose: () => void;
  hint: string;
}

function HintPopover(props: HintPopoverProps) {
  const { setClose, hint } = props;

  return (
    <Wrapper $position="relative" height="100%">
      <Wrapper
        $position="absolute"
        height="fit-content"
        width="fit-content"
        right="322.5px"
      >
        <Image src={popover} />
        <Wrapper
          width="312px"
          height="112px"
          $position="absolute"
          $zindex="10"
          left="44px"
          $top="44px"
        >
          <Wrapper width="100%" display="flex" $flexdirection="column">
            <Wrapper
              width="100%"
              display="flex"
              $flexdirection="row"
              $justifycontent="space-between"
            >
              <Label $token="Body1Medium" color={theme.Color.Primary.normal}>
                힌트
              </Label>
              <Button onClick={setClose}>
                <img src={close} width={"12px"} height={"12px"} />
              </Button>
            </Wrapper>
            <Wrapper>
              <Label $token="Body1Regular" color={theme.Color.TextIcon.default}>
                {hint}
              </Label>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default HintPopover;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

const Button = styled.button`
  width: fit-content;
  height: fit-content;
`;
