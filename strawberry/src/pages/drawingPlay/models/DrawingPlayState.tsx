type StageType = 1 | 2 | 3 | number;
type StatusType = "onBoarding" | "game" | "result" | "finish";

export interface DrawingPlayState {
  isGuideOpen: boolean | undefined;
  guideIndex: number;
  stage: StageType;
  totalStage: number;
  status: StatusType;
  canvasImg: string;
  timeLimit: number;
  isDrawing: boolean;
}

export default DrawingPlayState;
