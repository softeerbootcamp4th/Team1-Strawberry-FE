import { useState } from "react";

import { Wrapper } from "../../../../core/design_system";

type seatsType = 5 | 6 | 7;

import space_5 from "/src/assets/images/newCar/space_5.svg";
import space_6 from "/src/assets/images/newCar/space_6.svg";
import space_7 from "/src/assets/images/newCar/space_7.svg";
import styled from "styled-components";

function SpaceSeats() {
  const [seats, setSeats] = useState<seatsType>(5);

  const imgs = {
    5: space_5,
    6: space_6,
    7: space_7,
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
          <button onClick={() => setSeats(5)}>5인승</button>
          <button onClick={() => setSeats(6)}>6인승</button>
          <button onClick={() => setSeats(7)}>7인승</button>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 64px 240px;
  box-sizing: border-box;
`;
