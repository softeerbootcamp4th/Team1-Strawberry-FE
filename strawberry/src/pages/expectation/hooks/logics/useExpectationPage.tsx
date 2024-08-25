import { useEffect, useMemo } from "react";

import { throttle } from "../../../../core/utils";

import useExpectationData from "../useExpectationData";
import { useExpectationState } from "../useExpectationState";
import { useExpectationDispatch } from "../useExpectationDispatch";
import { ExpectationType } from "../../contexts/expectationContext";
import { CustomError } from "../../../../data/config/customError";

interface UseExpectationPageType {
  expectationList: ExpectationType[];
  nowPage: number;
  totalPage: number;
  changePage: () => void;
  bannerImg: string;
  listError: CustomError | null;
  refetchList: () => void;
}

function useExpectationPage(): UseExpectationPageType {
  const { refetchList, listError } = useExpectationData();
  const { expectationList, nowPage, totalPage, bannerImg } =
    useExpectationState();
  const dispatch = useExpectationDispatch();

  useEffect(() => {
    refetchList();
  }, [nowPage, refetchList]);

  const changePage = throttle()((page: number) => {
    dispatch({ type: "SET_NOW_PAGE", payload: page });
  });

  const throttledChangePage = useMemo(() => {
    return throttle()(changePage);
  }, []);

  return {
    expectationList,
    nowPage,
    totalPage,
    changePage: throttledChangePage,
    bannerImg,
    listError,
    refetchList,
  };
}

export default useExpectationPage;
