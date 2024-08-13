import { useEffect } from "react";

import { useDrawingPlayDispatch } from "./useDrawingPlayDispatch";
import { useDrawingPlayState } from "./useDrawingPlayState";

import santafeBG from "/src/assets/images/background/santafeBG.png";
import interiorBG from "/src/assets/images/background/interiorBG.png";
import exteriorBG from "/src/assets/images/background/exteriorBG.png";

export function useDrawingOnboarding() {
  const { stage, totalStage } = useDrawingPlayState();
  const dispatch = useDrawingPlayDispatch();

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch({ type: "SET_GAME" });
    }, 3000);

    return () => clearTimeout(id);
  }, [dispatch]);

  return {
    stage,
    totalStage,
    imgPath: imgPaths[stage],
    title: titles[stage],
  };
}

const imgPaths = ["", santafeBG, interiorBG, exteriorBG];
const titles = [
  "",
  "3초 후 디 올 뉴 싼타페를 그려주세요!",
  "3초 후 디 올 뉴 싼타페의 space를 그려주세요!",
  "3초 후 디 올 뉴 싼타페의 space를 그려주세요!",
];
