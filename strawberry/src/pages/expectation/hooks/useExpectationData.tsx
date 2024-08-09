import { useEffect } from "react";
import { useExpectationPageQuery } from "./apis/useExpectationPageQuery";
import { useExpectationListQuery } from "./apis/useExpectationListQuery";

import { useExpectationDispatch } from "./useExpectationDispatch";

function useExpectationData() {
  const { data: pageData } = useExpectationPageQuery();
  const { data: listData, refetch: refetchList } = useExpectationListQuery();
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
