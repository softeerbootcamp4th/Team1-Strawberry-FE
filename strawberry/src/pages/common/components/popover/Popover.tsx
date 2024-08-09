import styled from "styled-components";
import { useState } from "react";
import { Wrapper } from "../../../../core/design_system";

import popoverButton from "/src/assets/images/icons/popoverButton.svg";

import PopoverBox from "./PopoverBox";

interface PopoverProps {
  type: string;
  content: string;
}

function Popover(props: PopoverProps) {
  const { type, content } = props;
  const [isContentShown, setIsContentShown] = useState<boolean>(false);

  return (
    <Wrapper $position="relative">
      <button onClick={() => setIsContentShown(true)}>
        <HoverImg src={popoverButton} />
      </button>
      <Wrapper $position="absolute">
        {/* <Wrapper $position="absolute" width="100%" right="0"> */}
        {isContentShown && (
          <PopoverBox
            type={type}
            content={content}
            setClose={() => setIsContentShown(false)}
          />
        )}
      </Wrapper>
    </Wrapper>
  );
}

export default Popover;

const HoverImg = styled.img`
  position: absolute;
  top: 35px;
  right: -35px;
`;
