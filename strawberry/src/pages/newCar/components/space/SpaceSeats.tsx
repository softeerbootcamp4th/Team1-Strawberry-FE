import { useState } from "react";

import { Wrapper, ImageEnum } from "../../../../core/design_system";

type seatsType = 5 | 6 | 7;

import styled from "styled-components";
import FoundationButton from "../FoundationButton";

function SpaceSeats() {
  const [seats, setSeats] = useState<seatsType>(5);

  const imgs = {
    5: ImageEnum.IMAGES.NEWCAR.SPACE_5,
    6: ImageEnum.IMAGES.NEWCAR.SPACE_6,
    7: ImageEnum.IMAGES.NEWCAR.SPACE_7,
  };

  return (
    <>
      <NewCarSeatsWrapper>
        <Wrapper
          width="100%"
          display="flex"
          $justifycontent="flex-end"
          $margin="0 0 24px 0"
        >
          <FoundationButton
            variant="SOLID"
            // onClick={() => setSeats(5)}
            title="5인승"
          />
          <FoundationButton
            variant="OUTLINE"
            // onClick={() => setSeats(6)}
            title="6인승"
          />
          <FoundationButton
            variant="OUTLINE"
            // onClick={() => setSeats(7)}
            title="7인승"
          />
        </Wrapper>
        <Wrapper>
          <img src={imgs[seats]} alt="img" width="100%" />
        </Wrapper>
      </NewCarSeatsWrapper>
    </>
  );
}

export default SpaceSeats;

const NewCarSeatsWrapper = styled.div`
  margin: 0 auto;
  width: 1440px;
  display: flex;
  flex-direction: column;
  padding: 64px 0;
  box-sizing: border-box;
`;
