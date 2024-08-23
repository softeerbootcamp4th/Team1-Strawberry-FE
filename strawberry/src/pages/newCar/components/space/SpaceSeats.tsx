import styled from "styled-components";

import { Wrapper, ImageEnum } from "../../../../core/design_system";

import { SpaceType } from "../../models";

import { useNewCarDispatch } from "../../hooks/useNewCarDispatch";
import { useNewCarState } from "../../hooks/useNewCarState";

import FoundationRadioButtons from "../FoundationRadioButton";

function SpaceSeats() {
  const state = useNewCarState();
  const dispatch = useNewCarDispatch();

  const buttons = [
    { title: "5인승", value: "5" as SpaceType },
    { title: "6인승", value: "6" as SpaceType },
    { title: "7인승", value: "7" as SpaceType },
  ];

  const imgs = {
    "5": ImageEnum.IMAGES.NEWCAR.SPACE_5,
    "6": ImageEnum.IMAGES.NEWCAR.SPACE_6,
    "7": ImageEnum.IMAGES.NEWCAR.SPACE_7,
  };

  const actionCreator = (value: SpaceType) => {
    dispatch?.({ type: "SET_SPACE_TYPE", newType: value });
  };

  const selector = state.spaceType;

  return (
    <section>
      <NewCarSeatsWrapper>
        <Wrapper
          width="100%"
          display="flex"
          $justifycontent="flex-end"
          $margin="0 0 24px 0"
        >
          <FoundationRadioButtons<SpaceType>
            buttons={buttons}
            actionCreator={actionCreator}
            selector={selector}
          />
        </Wrapper>
        <Wrapper>
          <img
            loading="lazy"
            src={imgs[state.spaceType]}
            alt="img"
            width="100%"
          />
        </Wrapper>
      </NewCarSeatsWrapper>
    </section>
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
