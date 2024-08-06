import { Wrapper } from "../../../../core/design_system";
import QuizInfoImg from "../../../../assets/images/temp/QuizInfoImg.svg";

function QuizInfo() {
  return (
    <Wrapper $padding="95px 0 58px 0" display="flex" $justifycontent="center">
      <img width="75%" src={QuizInfoImg}></img>
    </Wrapper>
  );
}

export default QuizInfo;
