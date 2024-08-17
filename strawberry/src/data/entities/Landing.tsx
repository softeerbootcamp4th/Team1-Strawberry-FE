export interface Landing {
  remainSecond: number;
  imgs: {
    mainImgUrl: string;
    quizMainImg: string;
    eventInfoImg: string;
    quizPrizeImg: string;
    drawingMainImg: string;
    scrolledImgUrl: string;
    drawingPrizeImg: string;
  };
  quizEventStartAt: QuizOpen[];
}

export interface QuizOpen {
  isStarted: boolean;
  startAt: string;
}
