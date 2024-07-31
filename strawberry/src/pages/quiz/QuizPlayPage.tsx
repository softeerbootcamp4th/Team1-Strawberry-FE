import { EventButton, Label, Wrapper, theme } from "../../core/design_system";
import CardInput from "./components/quizInput/CardInput";
import QuizBoard from "./components/quizBoard/QuizBoard";

const quizzes = [
  {
    description:
      "디 올 뉴 싼타페는 \n 'ㅇㅅ'과 아웃도어를 넘나드는 새로운 라이프 제공을 목표로 합니다.",
    question: "'ㅇㅅ'은 무엇을 의미할까요?",
    subDescription: "",
  },
  {
    description:
      "디 올 뉴 싼타페는 'ㅇㅂㅎ' 멀티 콘솔이 탑재되어 \n 2열 탑승자도 수납공간을 쉽게 사용할 수 있습니다.",
    question: "'ㅇㅂㅎ'은 무엇을 의미할까요?",
    subDescription: "",
  },
  {
    description: "디 올 뉴 싼타페 하이브리드의",
    question: "복합연비는 몇 km/l 일까요?",
    subDescription: "18인치 타이어/자동6단/2WD, 빌트인 캠 미적용 기준",
  },
];

const answerInfos = [
  {
    placeholder: "ㅇㅅ",
  },
  {
    placeholder: "ㅇㅅㅇ",
  },
  {
    placeholder: "00.0",
  },
];

const hint =
  "디 올 뉴 싼타페는 완전히 새로운 상품성과 차별화된\n감성으로 일상과 아웃도어를 넘나드는 새로운 라이프\n를 제시합니다.";

function QuizPlayPage() {
  const quiz = quizzes[2];
  const answerInfo = answerInfos[2];

  return (
    <Wrapper
      $backgroundcolor={theme.Color.Ivory.ivory500}
      display="flex"
      $flexdirection="column"
      $alignitems="center"
      $padding="0 0 110px 0"
      height="calc(100vh - 180px)"
    >
      <QuizBoard quiz={quiz} hint={hint} />
      <Wrapper
        display="flex"
        $flexdirection="row"
        width="100%"
        $justifycontent="center"
        $alignitems="center"
      >
        <Label $token="Title1Medium" $margin="0 40px 0 0">
          정답 :
        </Label>
        <CardInput
          placeholder={answerInfo.placeholder}
          length={answerInfo.placeholder.length}
        />
      </Wrapper>
      <Wrapper
        $margin="70px 0 0 0"
        width="100%"
        display="flex"
        $justifycontent="center"
      >
        <EventButton type="QUIZ" status="DEFAULT" content="답변 제출하기" />
      </Wrapper>
    </Wrapper>
  );
}

export default QuizPlayPage;
