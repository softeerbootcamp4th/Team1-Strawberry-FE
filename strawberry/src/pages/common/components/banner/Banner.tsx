import React from "react";
import styled from "styled-components";

import { theme, Label, Wrapper } from "../../../../core/design_system";

interface BannnerProps {
  imgSource: string;
  eventName: string;
  eventTitle: string;
  contentChildren?: React.ReactNode;
  bottomChildren?: React.ReactNode;
}

function Banner(props: BannnerProps) {
  const { imgSource, eventName, eventTitle, contentChildren, bottomChildren } =
    props;

  return (
    <Wrapper $position="relative" height="calc(100vh - 70px)">
      <BannerImage src={imgSource}></BannerImage>
      <Wrapper
        $padding="146px 0px 0px 356px"
        $position="absolute"
        width="fit-content"
      >
        <Label
          $token="Title3Regular"
          color={theme.Color.TextIcon.reverse}
          $margin="0px 0px 12px 0px"
        >
          {eventName}
        </Label>
        <Label
          $token="Display2Medium"
          color={theme.Color.TextIcon.reverse}
          $margin="0px 0px 60px 0px"
        >
          {eventTitle}
        </Label>
        {contentChildren}
      </Wrapper>
      <Wrapper $position="absolute" $bottom="0" height="fit-content">
        {bottomChildren}
      </Wrapper>
    </Wrapper>
  );
}

export default Banner;

const BannerImage = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;
