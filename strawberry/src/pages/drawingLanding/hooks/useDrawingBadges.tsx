import { useMemo } from "react";

import { EventUserInfo } from "../models";

export function useDrawingBadges(eventUserData: EventUserInfo | undefined) {
  return useMemo(() => {
    const greenBadgeDescription =
      "마지막 게임 참여 시간으로부터\n4시간마다 배지가 하나씩 자동으로 충전됩니다.\n배지는 최대 2개까지 충전되며,\n사용한 후 다시 충전할 수 있어요!";
    const blueBadgeExpectationDescription =
      "신차 기대평 최초 작성 시\n1개가 주어져요!";
    const blueBadgeShareDescription = "게임 최초 공유 시\n1개가 주어져요!";

    const isAcquiredExpectationBonus: boolean =
      (eventUserData?.expectationBonusChance ?? -1) >= 0;

    const isAcquiredShareBonus: boolean =
      (eventUserData?.shareBonusChance ?? -1) >= 0;

    return {
      greenBadgeDescription,
      blueBadgeExpectationDescription,
      blueBadgeShareDescription,
      isAcquiredExpectationBonus,
      isAcquiredShareBonus,
    };
  }, [eventUserData]);
}
