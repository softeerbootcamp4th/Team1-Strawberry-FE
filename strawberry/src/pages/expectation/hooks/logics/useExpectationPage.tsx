import { useEffect } from "react";

import { throttle } from "../../../../core/utils";

import useExpectationData from "../useExpectationData";
import { useExpectationState } from "../useExpectationState";
import { useExpectationDispatch } from "../useExpectationDispatch";
import { ExpectationType } from "../../contexts/expectationContext";

interface UseExpectationPageType {
  expectationList: ExpectationType[];
  nowPage: number;
  totalPage: number;
  changePage: () => void;
  bannerImg: string;
}

function useExpectationPage(): UseExpectationPageType {
  const { refetchList } = useExpectationData();
  const { expectationList, nowPage, totalPage, bannerImg } =
    useExpectationState();
  const dispatch = useExpectationDispatch();

  useEffect(() => {
    refetchList();
  }, [nowPage, refetchList]);

  const changePage = throttle()((page: number) => {
    dispatch({ type: "SET_NOW_PAGE", payload: page });
  });

  return {
    expectationList,
    nowPage,
    totalPage,
    changePage,
    bannerImg,
  };
}

export default useExpectationPage;
