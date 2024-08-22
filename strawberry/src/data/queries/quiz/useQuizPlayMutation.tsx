import { useMutation } from "react-query";

import network from "../../config/network";
import { QuizResult } from "../../entities/QuizResult";

import usePrizeModal from "../../../pages/quizPlay/hooks/usePrizeModal";

export interface UseQuizPlayMutationBodyType {
  answer: string;
  subEventId: number;
}

export function useQuizPlayMutation() {
  const prizeModal = usePrizeModal();

  const postQuiz = async ({ body }: { body: UseQuizPlayMutationBodyType }) => {
    return await network.post<QuizResult>("firstcome/quiz", body);
  };

  // onSuccess를 받아서 modal을 여는건 api 역할을 벗어남 -> view의 hook으로 처리하는 방향을 고려해봅시다
  // 여기서는 onSuccess를 받아서 correct, winner를 분류해서 던져주는 역할로 하면 좋을 것 같음
  // dto -> view의 model로 바꾸는 역할!
  // 선착순인만큼 성공처리, 에러처리 조금 더 신경써야할 것 같습니당
  const mutation = useMutation({
    mutationFn: postQuiz,
    onSuccess: (data) => {
      if (data) {
        prizeModal({
          isCorrect: data?.isCorrect,
          isWinner: data?.isWinner,
          prizeImgUrl: data?.prizeImgUrl,
          isParticipant: data?.isParticipant,
        });
      }
    },
  });

  return mutation;
}
