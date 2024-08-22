import { QuizLanding } from "../../../data/entities/QuizLanding";

export type QuizLandingAction =
  | { type: "SET_DATA"; data: QuizLanding }
  | { type: "SET_QUIZ_TOKEN"; token: string };
