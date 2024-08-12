import { useEffect } from "react";
import { useQuizPlayQuery } from "./queries/useQuizPlayQuery";
import { useParams } from "react-router-dom";
import { useQuizPlayDispatch } from "./useQuizPlayDispatch";

interface QuizDataType {
  overview: string;
  problem: string;
  carInfo: string;
  initConsonant: string;
  hint: string;
}

interface QuizPlayContextType {
  description: string;
  question: string;
  subDescription: string;
  placeholder: string;
  hint: string;
}

const keyMap: Record<keyof QuizPlayContextType, keyof QuizDataType> = {
  description: "overview",
  question: "problem",
  subDescription: "carInfo",
  placeholder: "initConsonant",
  hint: "hint",
};

function useQuizPlayData() {
  const { data } = useQuizPlayQuery();
  const { subEventId } = useParams();
  const dispatch = useQuizPlayDispatch();

  useEffect(() => {
    if (data) {
      const quizData = data as QuizDataType;

      dispatch({
        type: "SET_DESCRIPTION",
        payload: quizData[keyMap.description],
      });
      dispatch({
        type: "SET_QUESTION",
        payload: quizData[keyMap.question],
      });
      dispatch({
        type: "SET_HINT",
        payload: quizData[keyMap.hint],
      });
      dispatch({
        type: "SET_PLACEHOLDER",
        payload: quizData[keyMap.placeholder],
      });
      dispatch({
        type: "SET_SUB_DESCRIPTION",
        payload: quizData[keyMap.subDescription],
      });
    }

    if (subEventId) {
      dispatch({ type: "SET_SUB_EVENT_ID", payload: Number(subEventId) });
    }
  }, [data, subEventId, dispatch]);
}

export default useQuizPlayData;
