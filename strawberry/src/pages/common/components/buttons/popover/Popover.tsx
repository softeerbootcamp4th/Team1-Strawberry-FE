import styled from "styled-components";
import { theme, Wrapper, Label } from "../../../../../core/design_system";

import popover from "/src/assets/images/icons/popover.svg";
import close from "/src/assets/images/icons/close_gray.svg";

interface PopoverProps {
  setClose: () => void;
  type: string;
  content: string;
}

function Popover(props: PopoverProps) {
  const { setClose, type, content } = props;

  return (
    <Wrapper $position="relative" height="100%">
      <BoxWrapper>
        <Image src={popover} />
        <ContentWrapper>
          <Wrapper width="100%" display="flex" $flexdirection="column">
            <Wrapper
              width="100%"
              display="flex"
              $flexdirection="row"
              $justifycontent="space-between"
            >
              <Label $token="Body1Medium" color={theme.Color.Primary.normal}>
                {type}
              </Label>
              <Button onClick={setClose}>
                <img src={close} width={"12px"} height={"12px"} />
              </Button>
            </Wrapper>
            <Wrapper>
              <Label $token="Body1Regular" color={theme.Color.TextIcon.default}>
                {content}
              </Label>
            </Wrapper>
          </Wrapper>
        </ContentWrapper>
      </BoxWrapper>
    </Wrapper>
  );
}

export default Popover;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

const Button = styled.button`
  width: fit-content;
  height: fit-content;
`;

const BoxWrapper = styled.div`
  position: absolute;
  height: fit-content;
  width: fit-content;
  top: 42px;
  right: 322.6px;
`;

const ContentWrapper = styled.div`
  width: 312px;
  height: 112px;
  position: absolute;
  z-index: 10;
  left: 44px;
  top: 44px;
`;
