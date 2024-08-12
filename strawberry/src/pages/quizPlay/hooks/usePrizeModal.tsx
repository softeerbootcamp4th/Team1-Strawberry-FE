import { useGlobalDispatch } from "../../../core/hooks/useGlobalDispatch";
import { useNavigate } from "react-router-dom";
import { useQuizPlayDispatch } from "./useQuizPlayDispatch";

interface OpenModalProps {
  isCorrect: boolean;
  isWinner: boolean;
  prizeImgUrl: string;
}

function usePrizeModal() {
  const globalDispatch = useGlobalDispatch();
  const navigate = useNavigate();
  const quizPlayDispatch = useQuizPlayDispatch();

  function openModal({ isCorrect, isWinner, prizeImgUrl }: OpenModalProps) {
    if (!isCorrect) {
      globalDispatch?.({
        type: "OPEN_MODAL",
        modalCategory: "TWO_BUTTON",
        modalProps: {
          title: "정답이 아니에요 😔",
          info: "힌트를 활용해서\n다시 답변할 수 있어요!",
          whiteBtnContent: "취소",
          primaryBtnContent: "다시 답변하기",
          onWhiteBtnClick: () => {
            globalDispatch?.({ type: "CLOSE_MODAL" });
            quizPlayDispatch?.({ type: "SET_SUBMITTED" });
          },
          onPrimaryBtnClick: () => {
            globalDispatch?.({ type: "CLOSE_MODAL" });
          },
        },
      });
      return;
    }

    if (isCorrect && !isWinner) {
      globalDispatch?.({
        type: "OPEN_MODAL",
        modalCategory: "TWO_BUTTON",
        modalProps: {
          title: "아쉽게도 순위에 들지 못했어요 😔",
          info: "다음주 이벤트에 다시 도전할 수 있어요!",
          whiteBtnContent: "취소",
          primaryBtnContent: "확인",
          onWhiteBtnClick: () => {
            globalDispatch?.({ type: "CLOSE_MODAL" });
            quizPlayDispatch?.({ type: "SET_SUBMITTED" });
          },
          onPrimaryBtnClick: () => {
            globalDispatch?.({ type: "CLOSE_MODAL" });
            navigate("/drawing");
          },
        },
      });
      return;
    }

    if (isCorrect && isWinner) {
      globalDispatch?.({
        type: "OPEN_MODAL",
        modalCategory: "TWO_BUTTON",
        modalProps: {
          title: "축하합니다!",
          info: "선착순 이벤트에 당첨되었습니다!\n자세한 사항은 이벤트 안내페이지를 확인해주세요.",
          whiteBtnContent: "취소",
          primaryBtnContent: "이벤트 확인",
          imgPath: prizeImgUrl,
          onWhiteBtnClick: () => {
            globalDispatch?.({ type: "CLOSE_MODAL" });
            quizPlayDispatch?.({ type: "SET_SUBMITTED" });
          },
          onPrimaryBtnClick: () => {
            globalDispatch?.({ type: "CLOSE_MODAL" });
            navigate("/drawing");
          },
        },
      });
      return;
    }
  }

  return openModal;
}

export default usePrizeModal;
