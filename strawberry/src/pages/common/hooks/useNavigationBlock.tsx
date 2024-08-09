import { useBlocker } from "react-router-dom";

function useNavigationBlocker() {
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      currentLocation.pathname !== nextLocation.pathname,
  );

  return {
    isBlocked: blocker.state === "blocked",
    proceed: blocker.proceed,
    reset: blocker.reset,
  };
}

export default useNavigationBlocker;

// isBlocked: 블락 시에 보여줄 alert 조건부 렌더링에 사용
// proceed: 페이지 이동 함수
// reset: 페이지 이동 취소 함수
