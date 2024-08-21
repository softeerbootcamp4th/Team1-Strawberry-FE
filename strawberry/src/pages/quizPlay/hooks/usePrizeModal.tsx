import { useNavigate } from "react-router-dom";

import { useGlobalDispatch } from "../../../core/hooks/useGlobalDispatch";

interface OpenModalProps {
  isCorrect: boolean;
  isWinner: boolean;
  prizeImgUrl: string;
  isParticipant: boolean;
}

function usePrizeModal() {
  const globalDispatch = useGlobalDispatch();
  const navigate = useNavigate();

  const modalConfigurations = {
    duplicatedParticipant: {
      title: "이미 참여하셨습니다.",
      info: "다음주 이벤트에 다시 도전할 수 있어요!",
      primaryBtnContent: "확인",
      onPrimaryBtnClick: () => {
        globalDispatch?.({ type: "CLOSE_MODAL" });
        navigate("/quiz");
      },
    },
    incorrectAnswer: {
      title: "정답이 아니에요 😔",
      info: "힌트를 활용해서\n다시 답변할 수 있어요!",
      primaryBtnContent: "다시 답변하기",
      onPrimaryBtnClick: () => {
        globalDispatch?.({ type: "CLOSE_MODAL" });
      },
      enter: true,
    },
    correctButNotWinner: {
      title: "아쉽게도 순위에 들지 못했어요 😔",
      info: "다음주 이벤트에 다시 도전할 수 있어요!",
      primaryBtnContent: "확인",
      onPrimaryBtnClick: () => {
        globalDispatch?.({ type: "CLOSE_MODAL" });
        navigate("/quiz");
      },
    },
    winner: (prizeImgUrl: string) => ({
      title: "축하합니다!",
      info: "선착순 이벤트에 당첨되었습니다!\n자세한 사항은 이벤트 안내페이지를 확인해주세요.",
      primaryBtnContent: "확인",
      imgPath: prizeImgUrl,
      onPrimaryBtnClick: () => {
        globalDispatch?.({ type: "CLOSE_MODAL" });
        navigate("/drawing");
      },
    }),
  };

  function openModal({
    isCorrect,
    isWinner,
    prizeImgUrl,
    isParticipant,
  }: OpenModalProps) {
    let modalProps;

    if (!isCorrect) {
      modalProps = modalConfigurations.incorrectAnswer;
    }
    if (isCorrect && !isWinner) {
      modalProps = modalConfigurations.correctButNotWinner;
    }
    if (isCorrect && isWinner) {
      modalProps = modalConfigurations.winner(prizeImgUrl);
    }
    if (isParticipant) {
      modalProps = modalConfigurations.duplicatedParticipant;
    }

    if (modalProps) {
      globalDispatch?.({
        type: "OPEN_MODAL",
        modalCategory: "ONE_BUTTON",
        modalProps,
      });
    }
  }

  return openModal;
}

export default usePrizeModal;
