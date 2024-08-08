import { EventNotice } from "../../../common/components";

function DrawingNotice() {
  return (
    <EventNotice title="추첨 이벤트 유의사항" notices={notices}></EventNotice>
  );
}

export default DrawingNotice;

const notices = [
  "이벤트는 2024년 9월 1일부터 2024년 9월 21일까지 진행됩니다.",
  "현대자동차 공식 홈페이지 또는 제휴된 이벤트 페이지에서 참여 가능합니다.",
  "드로잉 게임 1회 이상 실행 시 추첨 이벤트 자동 응모 대상자가 됩니다.",
  "드로잉 게임을 공유하거나 기대평을 작성할 경우, 추첨 확률이 높아집니다.",
  "본 이벤트는 만 21세 이상의 참여자에게만 경품이 지급됩니다.",
  "5만원 초과 경품의 경우, 제세공과금(상품가의 22%)이 발생하며, 당첨자 본인 부담입니다.",
  "제세공과금의 입금 및 서류 제출 거부 시 당첨이 취소될 수 있습니다.",
  "경품의 양도/양수 및 타 상품으로의 교환/환불은 불가합니다.",
  "경품 이미지는 이해를 돕기 위한 것으로 실제 경품과는 차이가 있을 수 있습니다.",
  "이벤트 참여를 위해 제공된 개인 정보는 당첨자 관리 및 마케팅 운영 목적 외에는 사용되지 않으며, 일정 기간 후 파기됩니다.",
  "당첨자는 이벤트 종료 후 10일 이내에 현대자동차 공식 홈페이지 및 개별 연락을 통해 발표됩니다.",
  "이벤트 당첨자 발표 후 2회 이상 연락이 되지 않을 경우 당첨이 취소될 수 있습니다.",
  "발표일은 상황에 따라 변경될 수 있으며, 변경 시 홈페이지를 통해 공지됩니다.",
  "이벤트 참여자는 본 유의사항을 숙지하고 동의한 것으로 간주합니다.",
  "추첨 혹은 사정에 따라 이벤트 내용이 변경될 수 있으며, 변경 시 홈페이지를 통해 공지됩니다.",
  "기타 문의 사항은 현대자동차 고객센터로 연락 바랍니다.",
];
