import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGlobalState } from "../../../../core/hooks/useGlobalState";
import { useGlobalDispatch } from "../../../../core/hooks/useGlobalDispatch";
import { throttle } from "../../../../core/utils";

import { useExpectationMutation } from "../../../../data/queries/expectation/useExpectationMutation";

import useLengthValidation from "../useLengthValidation";
import { checkOnlyBlank } from "../../../../core/utils";

function useExpectationInput() {
  const { mutate: postExpectation, isSuccess } = useExpectationMutation();
  const [isFocused, setIsFocused] = useState(false);
  const { content, handleChange, resetContent } = useLengthValidation({
    initialContent: "",
    maxLength: 300,
  });

  const { isLogin } = useGlobalState();
  const navigate = useNavigate();

  const globalDispatch = useGlobalDispatch();

  useEffect(() => {
    if (isSuccess) {
      location.reload();
    }
  }, [isSuccess]);

  const handleSubmit = () => {
    if (checkOnlyBlank(content)) {
      alert("공백만 제출할 수 없습니다.");
      resetContent();
      return;
    }

    if (content.length === 0) {
      alert("내용을 입력해주세요.");
      return;
    }

    if (!isLogin) {
      globalDispatch?.({
        type: "OPEN_MODAL",
        modalCategory: "TWO_BUTTON",
        modalProps: {
          info: "로그인 후 이용 가능한 서비스입니다.\n로그인하시겠습니까?",
          whiteBtnContent: "취소",
          primaryBtnContent: "확인",
          onWhiteBtnClick: () => globalDispatch({ type: "CLOSE_MODAL" }),
          onPrimaryBtnClick: () => {
            globalDispatch({ type: "CLOSE_MODAL" });
            navigate("/login");
          },
        },
      });
      return;
    }
    postExpectation({ comment: content });
  };

  const throttledSubmit = useMemo(() => {
    return throttle()(handleSubmit);
  }, [content]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      throttledSubmit();
    }
  }

  return {
    content,
    handleChange,
    handleKeyDown,
    handleSubmit: throttledSubmit,
    isFocused,
    setIsFocused,
  };
}

export default useExpectationInput;
