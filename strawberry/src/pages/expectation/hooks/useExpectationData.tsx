import { useEffect } from "react";

import { useExpectationPageQuery } from "../../../data/queries/expectation/useExpectationPageQuery";
import { useExpectationListQuery } from "../../../data/queries/expectation/useExpectationListQuery";

import { useExpectationDispatch } from "./useExpectationDispatch";
import { useExpectationState } from "./useExpectationState";

function useExpectationData() {
  const state = useExpectationState();
  const { data: pageData } = useExpectationPageQuery();
  const { data: listData, refetch: refetchList } = useExpectationListQuery(
    state.nowPage,
  );
  const dispatch = useExpectationDispatch();

  useEffect(() => {
    if (pageData) {
      dispatch({
        type: "SET_BANNER_IMG",
        payload: pageData?.bannerImgUrl,
      });
    }
  }, [pageData, dispatch]);

  useEffect(() => {
    if (listData) {
      dispatch({
        type: "SET_EXPECTATION_LIST",
        payload: listData?.comments,
      });
      dispatch({
        type: "SET_TOTAL_PAGE",
        payload: listData?.totalPages,
      });
    }
  }, [listData, dispatch]);

  return { refetchList };
}

export default useExpectationData;
