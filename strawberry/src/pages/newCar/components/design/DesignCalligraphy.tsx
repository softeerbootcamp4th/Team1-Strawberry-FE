import styled from "styled-components";

import { Wrapper, Label } from "../../../../core/design_system";

import { DesignType } from "../../models";

import { useDesignCalligraphy } from "../../hooks/useCalligraphy";

import FoundationRadioButtons from "../FoundationRadioButton";

interface DesignCalligraphyProps {
  designType: DesignType;
}

function DesignCalligraphy(props: DesignCalligraphyProps) {
  const { designType } = props;

  const {
    selector,
    typeButtons,
    colorButtons,
    colorName,
    getColorImg,
    calligraphyImg,
    handleColorButton,
    actionCreator,
  } = useDesignCalligraphy(designType);

  return (
    <section>
      <Wrapper width="1440px" $margin="0 auto" $padding="64px 0">
        <Wrapper display="flex" $justifycontent="right" $padding="0 0 24px 0">
          <FoundationRadioButtons
            buttons={typeButtons}
            actionCreator={actionCreator}
            selector={selector}
          />
        </Wrapper>
        <Wrapper
          display="flex"
          $justifycontent="center"
          $flexdirection="column"
          $alignitems="center"
        >
          <img
            loading="lazy"
            width="78%"
            height="500px"
            src={calligraphyImg}
            alt="Calligraphy Img"
          />
          <Label $token="Title2Medium" $margin="16px 0 24px 0">
            {colorName}
          </Label>
          <Wrapper display="flex" $gap="12px" width="max-content">
            {colorButtons.map((calligraphy, index) => (
              <ColorButton
                key={index}
                onClick={() => handleColorButton(calligraphy.color)}
              >
                <img
                  loading="lazy"
                  height="100%"
                  src={getColorImg(calligraphy.color)}
                  alt={calligraphy.name}
                />
              </ColorButton>
            ))}
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </section>
  );
}

export default DesignCalligraphy;

const ColorButton = styled.button`
  height: 60px;
`;
