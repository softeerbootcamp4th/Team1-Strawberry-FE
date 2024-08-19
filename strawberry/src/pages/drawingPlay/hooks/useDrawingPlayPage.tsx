import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useGlobalDispatch } from "../../../core/hooks/useGlobalDispatch";

import useNavigationBlocker from "../../common/hooks/useNavigationBlock";

import { useDrawingPlayState } from "./useDrawingPlayState";
import { useDrawingPlayDispatch } from "./useDrawingPlayDispatch";
import { useDrawingPlayQuery } from "../../../data/queries/drawing/useDrawingPlayQuery";

function useDrawingPlayPage() {
  const { status } = useDrawingPlayState();
  const { isBlocked, proceed, reset } = useNavigationBlocker();
  const { subEventId } = useParams();
  const drawingPlayDispatch = useDrawingPlayDispatch();
  const dispatch = useGlobalDispatch();

  const { data: drawingInfo } = useDrawingPlayQuery({
    subEventId: subEventId,
    eventPlayType: "NORMAL",
  });

  useEffect(() => {
    if (drawingInfo) {
      drawingPlayDispatch({
        type: "SET_DRAWING_INFO",
        payload: drawingInfo,
      });
    }
  }, [drawingInfo]);

  useEffect(() => {
    if (isBlocked && status !== "finish") {
      dispatch?.({
        type: "OPEN_MODAL",
        modalCategory: "TWO_BUTTON",
        modalProps: {
          title: "이벤트에서 나가시겠습니까?",
          info: "해당 내용은 저장되지 않으며, 이벤트 참여기회를 잃게 됩니다.",
          whiteBtnContent: "취소",
          primaryBtnContent: "확인",
          onWhiteBtnClick: () => {
            reset?.();
            dispatch({ type: "CLOSE_MODAL" });
          },
          onPrimaryBtnClick: () => {
            proceed?.();
            dispatch({ type: "CLOSE_MODAL" });
          },
        },
      });
    } else {
      proceed?.();
    }
  }, [status, isBlocked]);

  return { status };
}

export default useDrawingPlayPage;
