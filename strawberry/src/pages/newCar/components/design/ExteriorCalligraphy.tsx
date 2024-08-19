import { Wrapper, Label } from "../../../../core/design_system";
import { useNewCarDispatch } from "../../hooks/useNewCarDispatch";

import { useNewCarState } from "../../hooks/useNewCarState";
import { ExteriorCalligraphyType } from "../../models";
import FoundationRadioButtons from "../FoundationRadioButton";

function ExteriorCalligraphy() {
  const buttons = [
    { title: "캘리그래피", value: "NORMAL" as ExteriorCalligraphyType },
    {
      title: "캘리그래피(블랙잉크)",
      value: "BLACKINK" as ExteriorCalligraphyType,
    },
  ];

  const state = useNewCarState();
  const dispatch = useNewCarDispatch();

  const actionCreator = (value: ExteriorCalligraphyType) => {
    dispatch({
      type: "SET_EXTERIOR_CALLIGRAPHY_TYPE",
      newType: value,
    });
  };

  const selector = state.exteriorCalligraphyType;

  return (
    <Wrapper>
      <Wrapper>
        <FoundationRadioButtons<ExteriorCalligraphyType>
          buttons={buttons}
          actionCreator={actionCreator}
          selector={selector}
        />
      </Wrapper>
      <img />
      <Label $token="Title2Medium">{state.exteriorCalligraphyType}</Label>
    </Wrapper>
  );
}

export default ExteriorCalligraphy;
