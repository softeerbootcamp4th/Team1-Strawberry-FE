export function getChanceFromLastTime(lastPlayTime: string): number {
  const lastPlayDate = new Date(lastPlayTime);
  lastPlayDate.setHours(lastPlayDate.getHours());
  const nextChanceDate = new Date(lastPlayDate.getTime() + 4 * 60 * 60 * 1000);

  const now = new Date();
  const timeDifference = now.getTime() - nextChanceDate.getTime();

  if (timeDifference >= 4 * 60 * 60 * 1000) {
    return 2;
  }

  if (timeDifference >= 0) {
    return 1;
  }

  return 0;
}
