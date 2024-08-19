interface makeInfoMsgProps {
  totalChance: number;
  expectationChance: number;
  shareChance: number;
}

interface messageType {
  POSSIBLE_SHARE_EXPECTATION: string;
  POSSIBLE_EXPECTATION: string;
  POSSIBLE_SHARE: string;
  POSSIBLE: string;
  IMPOSSIBLE_SHARE_EXPECTATION: string;
  IMPOSSIBLE_EXPECTATION: string;
  IMPOSSIBLE_SHARE: string;
  IMPOSSIBLE: string;
}

export function makeChanceMsg({
  totalChance,
  expectationChance,
  shareChance,
}: makeInfoMsgProps): string {
  const messages: messageType = {
    POSSIBLE_SHARE_EXPECTATION: `기회가 ${totalChance}번 남았어요!\n링크 공유 / 기대평 작성으로 추가 재도전 기회를 얻으세요!`,
    POSSIBLE_EXPECTATION: `기회가 ${totalChance}번 남았어요!\n기대평 작성으로 추가 재도전 기회를 얻으세요!`,
    POSSIBLE_SHARE: `기회가 ${totalChance}번 남았어요!\n링크 공유로 추가 재도전 기회를 얻으세요!`,
    POSSIBLE: `기회가 ${totalChance}번 남았어요!`,
    IMPOSSIBLE_SHARE_EXPECTATION: `이벤트 참여 기회가 모두 소진되었어요.\n링크 공유 / 기대평 작성으로 추가 재도전 기회를 얻으세요!`,
    IMPOSSIBLE_EXPECTATION: `이벤트 참여 기회가 모두 소진되었어요.\n기대평 작성으로 추가 재도전 기회를 얻으세요!`,
    IMPOSSIBLE_SHARE: `이벤트 참여 기회가 모두 소진되었어요.\n링크 공유로 추가 재도전 기회를 얻으세요!`,
    IMPOSSIBLE: `이벤트 참여 기회가 모두 소진되었어요.\n8시간 후, 2번의 이벤트 참여 기회를 추가로 얻을 수 있어요!`,
  };

  const key = [
    totalChance > 0 ? "POSSIBLE" : "IMPOSSIBLE",
    expectationChance === -1 ? "EXPECTATION" : "",
    shareChance === -1 ? "SHARE" : "",
  ]
    .filter(Boolean)
    .join("_") as keyof messageType;

  return messages[key];
}
