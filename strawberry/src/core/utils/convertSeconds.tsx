function convertSeconds(totalSeconds: number) {
  const secondsInMinute = 60;
  const secondsInHour = 3600; // 60 minutes * 60 seconds
  const secondsInDay = 86400; // 24 hours * 3600 seconds

  const days = Math.floor(totalSeconds / secondsInDay);
  totalSeconds %= secondsInDay;

  const hours = Math.floor(totalSeconds / secondsInHour);
  totalSeconds %= secondsInHour;

  const minutes = Math.floor(totalSeconds / secondsInMinute);
  const seconds = totalSeconds % secondsInMinute;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

export default convertSeconds;
