import styled from "styled-components";

import { Label, theme, Wrapper } from "../../../../core/design_system";

import PopoverButton from "../../../common/components/buttons/popover/PopoverButton.tsx";
import DrawingScore from "../DrawingScore";
import DrawingInput from "./DrawingInput";
import HighestScore from "./HighestScore";

import UrlButton from "/src/assets/images/icons/UrlButton.svg";
import RetryButton from "/src/assets/images/icons/RetryButton.svg";

import drawingFinishBG from "/src/assets/images/background/drawingFinishBG.svg";
import useDrawingFinish from "../../hooks/useDrawingFinish.tsx";

function DrawingFinish() {
  const { finalScore, highestScore, handleSharedClick } = useDrawingFinish();

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
        <HighestScore score={highestScore} />
        <Label
          $margin="40px 0 0 0"
          $token="Title2Medium"
          color={theme.Color.TextIcon.default}
        >
          최종 점수
        </Label>
        <Wrapper width="fit-content" height="fit-content" $position="relative">
          <img src="https://s3-alpha-sig.figma.com/img/de82/685d/2752e884c15d3abd92a2193c6288551d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cZtbhRnyUIPmAzDki-K2F3BZTG1g2UjFubm237vFA8opEAr1ZobTFuXY14OGWp53ox3h7h1Y8HZm1qWxOeDfwvPKKFpfihaYGqUxHCB7FWvPbzyQM5SFNBJ6R3OvVkbLAKQOgiE~BcrT8yMLzGGrRiIccvJjTzuAoZWSLvMPmGKLAPptzJYypk5S2C8mDFxv04yWgjNScTR-A6CooH8-rg0MLhi6sdIpMatk-CFjzK38o3LVqxez63MBOOiK6v8r-O3XTYMsuOLs76Vzk4tLpOfmV9mWZ6jTGQZkfE43v5BqcCRo9DxsK-DdqXo7ItjQnd5Hej7622M1w0CExawoeQ__" />
          <ScoreWrapper>
            <DrawingScore score={finalScore} />
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
          >
            {
              "기회가 n번 남았어요!\n링크 공유 / 기대평 작성으로 추가 재도전 기회를 얻으세요!"
            }
          </Label>
        </Wrapper>
        <Wrapper $margin="16px 0 0 0">
          <DrawingInput />
        </Wrapper>
        <Wrapper
          height="100px"
          display="flex"
          width="fit-content"
          $justifycontent="center"
          $margin="20px 0 0 0"
          $gap="55px"
        >
          <StyledButton onClick={handleSharedClick}>
            <img src={UrlButton} alt="url" />
            <Label $token="Heading1Regular">URL 복사하기</Label>
          </StyledButton>
          <StyledButton>
            <img src={RetryButton} alt="url" />
            <Label $token="Heading1Regular">게임 다시하기</Label>
          </StyledButton>
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

const StyledButton = styled.button`
  /* width: 80px;
  height: 100px; */
  width: 120px;
  height: 138px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;