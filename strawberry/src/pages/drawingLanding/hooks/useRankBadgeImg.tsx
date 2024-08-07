import { useMemo } from "react";

import GoldRankBadge from "../../assets/images/icons/GoldRankBadge.svg";
import SilverRankBadge from "../../assets/images/icons/SilverRankBadge.svg";
import BronzeRankBadge from "../../assets/images/icons/BronzeRankBadge.svg";
import NormalRankBadge from "../../assets/images/icons/NormalRankBadge.svg";

export function useRankBadgeImage(rank: number): string {
  return useMemo(() => {
    switch (rank) {
      case 1:
        return GoldRankBadge;
      case 2:
        return SilverRankBadge;
      case 3:
        return BronzeRankBadge;
      default:
        return NormalRankBadge;
    }
  }, [rank]);
}
