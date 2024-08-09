import { useState } from "react";
import styled from "styled-components";

import { theme, Label, Wrapper } from "../../../../core/design_system";
import ModalButton from "../../../common/components/buttons/ModalButton";

import CheckBoxFilled from "/src/assets/images/icons/checkbox-fill.svg";
import CheckBoxUnFilled from "/src/assets/images/icons/checkbox-unfill.svg";

import { guides } from "../../models/Guide";

import Test from "./Test";

function GuideSlick() {
  const [isCheck, toggleCheck] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Wrapper $position="relative">
      <Label
        width="100%"
        $textalign="center"
        $token="Heading1Regular"
        color={theme.Color.TextIcon.default}
        $margin="0 0 28px 0"
      >
        {guides[currentIndex].description}
      </Label>
      <Test />
      <CheckBoxButton onClick={() => toggleCheck(!isCheck)}>
        <img src={isCheck ? CheckBoxFilled : CheckBoxUnFilled} />
        <Label $token="Body2Regular" color={theme.Color.TextIcon.info}>
          3일간 보지 않기
        </Label>
      </CheckBoxButton>
      <ModalButton modalType="WHITE_LARGE" content="닫기" />
    </Wrapper>
  );
}

export default GuideSlick;

const CheckBoxButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;

  position: absolute;
  right: 0;
  bottom: 165px;
`;
