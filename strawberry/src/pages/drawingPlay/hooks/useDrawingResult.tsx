import { useDrawingPlayDispatch } from "./useDrawingPlayDispatch";
import { useDrawingPlayState } from "./useDrawingPlayState";

import santafeBlurBG from "/src/assets/images/background/santafeBlurBG.svg";
import interiorBlurBG from "/src/assets/images/background/interiorBlurBG.svg";
import exteriorBlurBG from "/src/assets/images/background/exteriorBlurBG.svg";

export function useDrawingResult() {
  const dispatch = useDrawingPlayDispatch();
  const { stage, totalStage, canvasImg } = useDrawingPlayState();

  const handleNextStage = () => {
    dispatch({ type: "SET_ON_BOARDING" });
    dispatch({ type: "SET_NEXT_STAGE" });
  };

  const handleFinish = () => {
    dispatch({ type: "SET_FINISH" });
  };

  return {
    stage,
    totalStage,
    canvasImg,
    description: descriptions[stage],
    imgPath: imgPaths[stage],
    isLastStage: stage === totalStage,
    handleNextStage,
    handleFinish,
  };
}

const descriptions = [
  "",
  "디 올 뉴 싼타페의 실내는 언제 어디서든 아웃도어 라이프를 즐길 수 있는 넉넉한 거주 공간을 자랑하며\n수평과 수직 이미지를 강조한 레이아웃으로 외장과 자연스럽게 어우러질 수 있도록 디자인했습니다.",
  "디 올 뉴 싼타페는 평평하게 폴딩이 가능한 2/3열 시트와 넓은 테일게이트 구성으로\n가장 실용적인 SUV로 나아가고 있습니다.",
  "디 올 뉴 싼타페는 테라스 컨셉의 테일게이트 공간을 기반으로 적재 이용성은 물론\n대형 테일게이트의 개방감을 활용한 다양한 아웃도어 활동을 지원합니다. ",
];

const imgPaths = ["", santafeBlurBG, interiorBlurBG, exteriorBlurBG];
