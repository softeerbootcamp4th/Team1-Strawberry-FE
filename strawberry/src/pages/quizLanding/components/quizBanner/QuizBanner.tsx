import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Wrapper, EventButton } from "../../../../core/design_system";
import { useCheckLogin } from "../../../../core/hooks/useCheckLogin";

import { useQuizLandingState } from "../../hooks";

import QuizBannerTimer from "./QuizBannerTimer";

function QuizBanner() {
  const navigate = useNavigate();
  const checkLogin = useCheckLogin();
  const { quizLandingData: data } = useQuizLandingState();

  const handleEventClick = () => {
    checkLogin(() => {
      navigate(`/quiz/play/${data?.subEventId}`);
    });
  };

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
            status="DEFAULT"
            content="이벤트 참여하기"
            onClick={handleEventClick}
          ></EventButton>
        </Wrapper>
        <QuizBannerTimer></QuizBannerTimer>
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
