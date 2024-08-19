import styled from "styled-components";

import {
  Label,
  theme,
  Wrapper,
  ImageEnum,
} from "../../../../core/design_system";

import PopoverButton from "../../../common/components/buttons/popover/PopoverButton.tsx";
import DrawingScore from "../DrawingScore";
import DrawingInput from "./DrawingInput";
import HighestScore from "./HighestScore";

import drawingFinishBG from "/src/assets/images/background/drawingFinishBG.svg";
import useDrawingFinish from "../../hooks/useDrawingFinish.tsx";

import { makeChanceMsg } from "../../services/makeChanceMsg.ts";

function DrawingFinish() {
  const {
    finalScore,
    highestScore,
    handleSharedClick,
    chance,
    expectationChance,
    shareChance,
    handleRetryClick,
  } = useDrawingFinish();

  const realShareChance = shareChance === -1 ? 0 : shareChance;
  const realExpectationChance =
    expectationChance === -1 ? 0 : expectationChance;
  const totalChance = chance + realShareChance + realExpectationChance;

  return (
    <>
      <BGImage src={drawingFinishBG} />
      <Wrapper
        $margin="40px 0 0 0"
        width="100%"
        display="flex"
        $flexdirection="column"
        $justifycontent="center"
        $alignitems="center"
        $zindex="3"
        $position="relative"
      >
        <HighestScore score={Number(highestScore.toFixed(1))} />
        <Label
          $margin="40px 0 0 0"
          $token="Title2Medium"
          color={theme.Color.TextIcon.default}
        >
          최종 점수
        </Label>
        <Wrapper width="fit-content" height="fit-content" $position="relative">
          <img src={ImageEnum.IMAGES.DRAWING.CELEBRATION} width="500px" />
          <ScoreWrapper>
            <DrawingScore score={Number(finalScore.toFixed(1))} />
          </ScoreWrapper>
        </Wrapper>
        <Wrapper display="flex" $position="relative">
          <Wrapper $position="absolute" $zindex="100" $top="-30px">
            <PopoverButton
              type="도움말"
              content={
                "이벤트 링크 최초 공유, 신차 기대평 최초 작성 시에\n드로잉 이벤트 참여 가능 횟수가 1회씩 주어집니다!"
              }
            />
          </Wrapper>
          <Label
            $token="Heading1Regular"
            color={theme.Color.TextIcon.info}
            $textalign="center"
            width="100%"
          >
            {makeChanceMsg({ totalChance, expectationChance, shareChance })}
          </Label>
        </Wrapper>
        <Wrapper $margin="16px 0 0 0">
          <DrawingInput />
        </Wrapper>
        <Wrapper
          display="flex"
          $justifycontent="center"
          $margin="50px 0 0 0"
          $gap="80px"
        >
          <StyledButton onClick={handleSharedClick}>
            <img src={ImageEnum.ICONS.URLBUTTON} alt="url" width="100px" />
            <Label $token="Heading1Regular" $textalign="center">
              URL 복사하기
            </Label>
          </StyledButton>

          {totalChance > 0 ? (
            <RetryDefaultButton onClick={handleRetryClick}>
              <img src={ImageEnum.ICONS.RETRYBUTTON} alt="url" width="100px" />
              <Label
                $token="Heading1Regular"
                color={theme.Color.TextIcon.default}
              >
                게임 다시하기
              </Label>
            </RetryDefaultButton>
          ) : (
            <RetryDisabledButton>
              <img
                src={ImageEnum.ICONS.RETRY_DISABLED}
                alt="url"
                width="100px"
              />
              <Label
                $token="Heading1Regular"
                color={theme.Color.TextIcon.assistive}
              >
                게임 다시하기
              </Label>
            </RetryDisabledButton>
          )}
        </Wrapper>
      </Wrapper>
    </>
  );
}
export default DrawingFinish;

const BGImage = styled.img`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  object-fit: fill;
`;

const ScoreWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const RetryDefaultButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RetryDisabledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;
`;
const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
