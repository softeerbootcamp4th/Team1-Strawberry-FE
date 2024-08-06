import { useEffect } from "react";

import { useQuizLandingDispatch } from "./useQuizLandingDispatch";
import { useQuizLandingQuery } from "./useQuizLandingQuery";

export function useQuizLandingData() {
  const { data } = useQuizLandingQuery();
  const dispatch = useQuizLandingDispatch();

  useEffect(() => {
    if (data) {
      dispatch({ type: "SET_DATA", data: data });
    }
  }, [data, dispatch]);

  return { data };
}
