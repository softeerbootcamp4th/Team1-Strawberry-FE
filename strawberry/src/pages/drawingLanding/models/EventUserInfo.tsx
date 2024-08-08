export interface EventUserInfo {
  lastVisitedAt: string;
  // sharedUrl: string;
  // sharedScore: number;
  // priorityScore: number;
  // lottoScore: number;
  gameScore: number;
  chance: number;
  expectationBonusChance: number;
  shareBonusChance: number;
}

// expectationBonusChance: -1 => 기대평 작성 안함 // 0  => 기대평 작성 하고 게임 한거 // 1 => 기대평 작성 하고 게임은 안한거
