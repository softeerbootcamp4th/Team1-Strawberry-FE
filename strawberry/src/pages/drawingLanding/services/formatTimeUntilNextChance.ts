export function formatTimeUntilNextChance(lastPlayTime: string): string {
  const lastPlayDate = new Date(lastPlayTime);
  lastPlayDate.setHours(lastPlayDate.getHours());
  const nextChanceDate = new Date(lastPlayDate.getTime() + 4 * 60 * 60 * 1000);

  const now = new Date();
  const timeDifference = nextChanceDate.getTime() - now.getTime();

  const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutesRemaining = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
  );

  return `${hoursRemaining}시간 ${minutesRemaining}분 후에 도전할 수 있어요!`;
}
