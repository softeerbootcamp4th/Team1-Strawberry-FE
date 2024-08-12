import styled from "styled-components";

import { Label, theme, Wrapper } from "../../../../core/design_system";
import { scrollTop } from "../../../../core/utils";

import arrow from "/src/assets/images/icons/Arrow_Down_L_White.svg";

interface LandingBannerScrollButtonProps {
  scrollHeight: number;
}

function LandingBannerScrollButton({
  scrollHeight,
}: LandingBannerScrollButtonProps) {
  return (
    <>
      <Wrapper
        width="678px"
        display="flex"
        $flexdirection="column"
        $alignitems="center"
      >
        <Label
          color={theme.Color.TextIcon.reverse}
          width="100%"
          $textalign="center"
          $token="Heading2Regular"
        >
          자세한 내용은 스크롤을 내려주세요
        </Label>
        <StyledButton onClick={() => scrollTop(scrollHeight)}>
          <img src={arrow} alt="arrow" />
        </StyledButton>
      </Wrapper>
    </>
  );
}

export default LandingBannerScrollButton;

const StyledButton = styled.button`
  width: 34px;
  height: 17px;
  margin-top: 25px;
`;
