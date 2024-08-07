import { useMemo } from "react";
import { EventUserInfo } from "../models";

function formatLastPlayTime(lastPlayTime: string): string {
  const lastPlayDate = new Date(lastPlayTime);

  const hours = lastPlayDate.getHours().toString().padStart(2, "0");
  const minutes = lastPlayDate.getMinutes().toString().padStart(2, "0");
  return `마지막 게임 참여 시간 : ${hours}시 ${minutes}분`;
}

function formatTimeUntilNextChance(lastPlayTime: string): string {
  const lastPlayDate = new Date(lastPlayTime);
  const nextChanceDate = new Date(lastPlayDate.getTime() + 8 * 60 * 60 * 1000);

  const now = new Date();
  const timeDifference = nextChanceDate.getTime() - now.getTime();

  if (timeDifference <= 0) {
    return "1회 도전할 수 있어요!";
  }

  const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutesRemaining = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
  );

  return `${hoursRemaining}시간 ${minutesRemaining}분 후에 도전할 수 있어요!`;
}

export function useDrawingChance(eventUserData: EventUserInfo | undefined) {
  return useMemo(() => {
    if (!eventUserData) {
      return;
    }

    const chance: number = eventUserData?.chance ?? 0;
    const bonusChance: number =
      (eventUserData?.expectationBonusChance ?? 0) +
      (eventUserData?.shareBonusChance ?? 0);

    const lastPlayTime: string = eventUserData?.lastVisitedAt ?? "";
    const formattedLastPlayTime = formatLastPlayTime(lastPlayTime);

    let text = "";

    if (chance > 0) {
      if (bonusChance > 0) {
        text = `${formattedLastPlayTime}\n${chance}회 + 보너스 ${bonusChance}회, 총 ${chance + bonusChance}회 도전할 수 있어요!`;
      } else {
        text = `${formattedLastPlayTime}\n${chance}회 도전할 수 있어요!`;
      }
    } else {
      text = `${formattedLastPlayTime}\n${formatTimeUntilNextChance(lastPlayTime)}`;
    }

    return text;
  }, [eventUserData]);
}
