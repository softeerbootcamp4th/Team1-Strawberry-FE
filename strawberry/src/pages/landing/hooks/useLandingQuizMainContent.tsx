function useLandingQuizMainContent() {
  const initialTime = 6 * 24 * 3600;

  // 일정 데이터
  const schedules = [
    { date: "9월 1일", time: "오후 12시" },
    { date: "9월 8일", time: "오후 12시" },
    { date: "9월 15일", time: "오후 12시" },
  ];

  return {
    initialTime,
    schedules,
  };
}

export default useLandingQuizMainContent;
