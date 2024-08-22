import styled from "styled-components";

import { Wrapper, EventButton } from "../../../../core/design_system";

import { useQuizBanner } from "../../hooks";

import QuizBannerTimer from "./QuizBannerTimer";

function QuizBanner() {
  const { data, handleEventClick, isOpened, setIsOpened } = useQuizBanner();

  return (
    <Wrapper $position="relative" height="calc(100vh - 70px)">
      <BannerImage src={data?.bannerImg}></BannerImage>
      <Wrapper $position="absolute" $bottom="0" height="352px">
        <Wrapper
          display="flex"
          $alignitems="center"
          $justifycontent="center"
          height="fit-content"
        >
          <EventButton
            type="QUIZ"
            status={
              !data?.valid ? "EVENT_END" : isOpened ? "DEFAULT" : "DISABLED"
            }
            content={
              data?.valid ? "이벤트 참여하기" : "이벤트가 종료되었습니다."
            }
            onClick={handleEventClick}
          ></EventButton>
        </Wrapper>
        <QuizBannerTimer setIsOpened={setIsOpened} />
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
