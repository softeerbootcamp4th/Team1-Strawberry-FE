import { PrizeInfo } from "./PrizeInfo";

interface EventImg {
  main: string;
}

export interface QuizLanding {
  valid: boolean;
  bannerImg: string;
  eventImg: EventImg;
  remainSecond: number;
  overview: string;
  problem: string;
  hint: string;
  anchor: string;
  quizSequence: number;
  prizeInfos: PrizeInfo[];
  startAt: string;
  endAt: string;
  winners: number;
}
