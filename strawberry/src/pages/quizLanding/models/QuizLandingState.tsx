import { QuizLanding } from "../../../data/entities/QuizLanding";

export interface QuizLandingState {
  quizLandingData?: QuizLanding;
  quizToken?: string | undefined;
}
