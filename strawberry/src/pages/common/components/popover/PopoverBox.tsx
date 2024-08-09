import styled from "styled-components";
import { theme, Wrapper, Label } from "../../../../core/design_system";

import popoverBox from "/src/assets/images/icons/popoverBox.svg";
import close from "/src/assets/images/icons/close_gray.svg";

interface PopoverBoxProps {
  setClose: () => void;
  type: string;
  content: string;
}

function PopoverBox(props: PopoverBoxProps) {
  const { setClose, type, content } = props;

  return (
    <Wrapper $position="relative" height="100%">
      <BoxWrapper>
        <Image src={popoverBox} />
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

export default PopoverBox;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

// const Content = styled.p`
//   line-height: 100%;
//   /* ${({ theme }) => theme.Typography.Body1Regular}
//   color: ${({ theme }} */
// `

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
