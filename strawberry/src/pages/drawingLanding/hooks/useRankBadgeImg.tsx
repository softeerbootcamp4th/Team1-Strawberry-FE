import { useMemo } from "react";

import { ImageEnum } from "../../../core/design_system";

export function useRankBadgeImage(rank: number): string {
  return useMemo(() => {
    switch (rank) {
      case 1:
        return ImageEnum.ICONS.GOLDRANKBADGE;
      case 2:
        return ImageEnum.ICONS.SILVERRANKBADGE;
      case 3:
        return ImageEnum.ICONS.BRONZERANKBADGE;
      default:
        return ImageEnum.ICONS.NORMALRANKBADGE;
    }
  }, [rank]);
}
