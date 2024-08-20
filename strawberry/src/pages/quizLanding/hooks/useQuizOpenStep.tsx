function useQuizOpenStep() {
  function isOpened(index: number, current: number) {
    if (index + 1 === current) return true;
    return false;
  }

  function isClosed(index: number, current: number) {
    if (index + 1 < current) return true;
    return false;
  }

  return {
    isOpened,
    isClosed,
  };
}

export default useQuizOpenStep;
