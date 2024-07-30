import QuizBanner from "./components/quizBanner";
import QuizInfo from "./components/quizInfo";
import { Wrapper } from "../../core/design_system";
import QuizOpen from "./components/quizOpen";
import QuizReward from "./components/quizReward";
import QuizNotice from "./components/quizNotice";

function QuizLandingPage() {
  return (
    <Wrapper>
      <QuizBanner />
      <QuizInfo />
      <QuizOpen />
      <QuizReward />
      <QuizNotice />
    </Wrapper>
  );
}

export default QuizLandingPage;
