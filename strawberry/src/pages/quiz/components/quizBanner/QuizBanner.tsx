import styled from "styled-components";
import { Wrapper, EventButton } from "../../../../core/design_system";

import QuizBannerContent from "./QuizBannerContent";
import QuizBannerImage from "../../../../assets/images/temp/QuizBannerImg.svg";
import QuizBannerTimer from "./QuizBannerTimer";

function QuizBanner() {
  const title = "매주 일요일 선착순으로 열리는\n퀴즈를 풀어보세요!";
  const placeholder = "ㄷㅇㄴㅆㅌㅍ";

  return (
    <Wrapper
      $position="relative"
      height="calc(100vh - 70px)"
      $backgroundcolor="blue"
    >
      <BannerImage src={QuizBannerImage}></BannerImage>
      <Wrapper
        $padding="146px 0px 0px 356px"
        $position="absolute"
        width="fit-content"
      >
        <QuizBannerContent title={title} placeholder={placeholder} />
      </Wrapper>
      <Wrapper $position="absolute" $bottom="0" height="352px">
        <Wrapper
          display="flex"
          $alignitems="center"
          $justifycontent="center"
          height="fit-content"
        >
          <EventButton
            type="QUIZ"
            status="DEFAULT"
            content="이벤트 참여하기"
          ></EventButton>
        </Wrapper>
        <QuizBannerTimer initialSeconds={604799}></QuizBannerTimer>
      </Wrapper>
    </Wrapper>
  );
}

export default QuizBanner;

const BannerImage = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;
