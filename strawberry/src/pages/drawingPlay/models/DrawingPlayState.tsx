import { DrawingPlay } from "../../../data/entities/DrawingPlay";
import { DrawingResult } from "../../../data/entities/DrawingResult";

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
  drawingInfo: DrawingPlay | undefined;
  drawingResult: DrawingResult | undefined;
  drawingImg: FormData | null;
}

export default DrawingPlayState;
