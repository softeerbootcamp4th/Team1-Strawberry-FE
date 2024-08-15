interface DrawingInfo {
  contourImgUrl: string;
  imgUrl: string;
  sequence: number;
  onBoardingMsg: string;
  gameMsg: string;
  startPosition: {
    x: number;
    y: number;
  };
}

export interface DrawingPlay {
  gameInfos: DrawingInfo[];
  chance: number;
}
