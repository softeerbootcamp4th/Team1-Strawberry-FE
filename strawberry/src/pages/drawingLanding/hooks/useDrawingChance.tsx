import { useMemo } from "react";
import { EventUserInfo } from "../../../data/entities/EventUserInfo";

import { getChanceFromLastTime } from "../services/getChanceFromLastTime";
import { formatTimeUntilNextChance } from "../services/formatTimeUntilNextChance";

export function useDrawingChance(eventUserData: EventUserInfo | undefined) {
  return useMemo(() => {
    if (!eventUserData) {
      return "";
    }

    let chance: number = eventUserData.chance ?? 0;
    const bonusChance: number =
      (eventUserData.expectationBonusChance === -1
        ? 0
        : (eventUserData.expectationBonusChance ?? 0)) +
      (eventUserData.shareBonusChance === -1
        ? 0
        : (eventUserData.shareBonusChance ?? 0));

    const lastPlayTime: string = eventUserData.lastChargeAt ?? "";

    const chanceFromLastTime = getChanceFromLastTime(lastPlayTime);
    chance = Math.min(2, chance + chanceFromLastTime);

    let text = "";

    if (chance > 0) {
      if (bonusChance > 0) {
        text = `${chance}회 + 보너스 ${bonusChance}회, 총 ${chance + bonusChance}회 도전할 수 있어요!`;
      } else {
        text = `${chance}회 도전할 수 있어요!`;
      }
    } else if (bonusChance > 0) {
      text = `보너스 기회로 ${bonusChance}회 도전할 수 있어요!`;
    } else {
      text = `${formatTimeUntilNextChance(lastPlayTime)}`;
    }

    return text;
  }, [eventUserData]);
}
