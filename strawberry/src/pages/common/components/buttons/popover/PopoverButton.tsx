import styled from "styled-components";
import { useState } from "react";
import { Wrapper, ImageEnum } from "../../../../../core/design_system";

import Popover from "./Popover";

interface PopoverButtonProps {
  type: string;
  content: string;
}

function PopoverButton(props: PopoverButtonProps) {
  const { type, content } = props;
  const [isContentShown, setIsContentShown] = useState<boolean>(false);

  return (
    <Wrapper $position="relative">
      <button onClick={() => setIsContentShown(true)}>
        <HoverImg src={ImageEnum.ICONS.POPOVERBUTTON} />
      </button>
      <Wrapper $position="absolute">
        {isContentShown && (
          <Popover
            type={type}
            content={content}
            setClose={() => setIsContentShown(false)}
          />
        )}
      </Wrapper>
    </Wrapper>
  );
}

export default PopoverButton;

const HoverImg = styled.img`
  position: absolute;
  top: 35px;
  right: -35px;
`;
