import html2canvas from "html2canvas";
import { useDrawingPlayDispatch } from "./useDrawingPlayDispatch";
import { useDrawingPlayState } from "./useDrawingPlayState";
import buildURL from "../../../data/config/buildURL";

export function useDrawingResult() {
  const dispatch = useDrawingPlayDispatch();
  const { stage, totalStage, canvasImg, drawingResult, drawingImg } =
    useDrawingPlayState();

  const handleNextStage = () => {
    if (stage === 1) {
      storeImg();
    }
    dispatch({ type: "SET_ON_BOARDING" });
    dispatch({ type: "SET_NEXT_STAGE" });
  };

  const getDrawingFormData = async (): Promise<FormData | null> => {
    const canvasContainer = document.getElementById("canvas-container");
    const scoreWrapper = document.getElementById("score-wrapper");

    if (!canvasContainer || !scoreWrapper) {
      console.error("Canvas container or score wrapper not found.");
      return null;
    }

    try {
      const canvas = await html2canvas(canvasContainer, {
        useCORS: true,
        allowTaint: false,
        logging: true,
        backgroundColor: "#F6F3F2",
      });

      return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (blob) {
            const formData = new FormData();
            formData.append("image", blob);
            resolve(formData);
          } else {
            reject(null);
          }
        }, "image/png");
      });
    } catch (error) {
      return null;
    }
  };

  const storeImg = async () => {
    const formData = await getDrawingFormData();
    dispatch?.({ type: "SET_DRAWING_IMG", payload: formData });
  };

  const sendImage = async () => {
    if (drawingImg) {
      await fetch(buildURL("lottery/drawing/image"), {
        method: "POST",
        body: drawingImg,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
    }
  };

  const handleFinish = () => {
    sendImage();
    dispatch({ type: "SET_FINISH" });
  };

  return {
    stage,
    totalStage,
    canvasImg,
    description: drawingResult?.resultDetail ?? "",
    imgPath: drawingResult?.blurImgUrl ?? "",
    title: drawingResult?.resultMsg,
    isLastStage: stage === totalStage,
    handleNextStage,
    handleFinish,
    score: drawingResult?.score ?? 0,
  };
}
