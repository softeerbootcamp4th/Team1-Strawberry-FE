import { useLandingQuery } from "../../../data/queries/landing/useLandingQuery";

function useLandingData() {
  const { data } = useLandingQuery();

  return {
    imgs: data?.imgs,
    quizInfos: data?.quizEventStartAt,
    remainSecond: data?.remainSecond,
  };
}

export default useLandingData;
