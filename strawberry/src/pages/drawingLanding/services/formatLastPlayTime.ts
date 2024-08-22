export function formatLastPlayTime(lastPlayTime: string): string {
  const lastPlayDate = new Date(lastPlayTime);
  lastPlayDate.setHours(lastPlayDate.getHours());

  const hours = lastPlayDate.getHours().toString().padStart(2, "0");
  const minutes = lastPlayDate.getMinutes().toString().padStart(2, "0");
  return `마지막 게임 참여 시간 : ${hours}시 ${minutes}분`;
}
