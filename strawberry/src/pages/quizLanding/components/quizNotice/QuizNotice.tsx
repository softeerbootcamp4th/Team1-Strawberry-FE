import styled from "styled-components";

import { Label, theme, Wrapper } from "../../../../core/design_system";

function QuizNotice() {
  return (
    <Wrapper
      $backgroundcolor={theme.Color.Neutral.neutral22}
      $padding="55px 0 85px 0"
    >
      <Wrapper width="75%" $margin="0 auto">
        <Label
          color={theme.Color.TextIcon.info}
          $token="Body1Medium"
          $margin="0 0 20px 0"
        >
          선착순 이벤트 유의사항
        </Label>
        <NoticeList>
          {notice.map((item, index) => (
            <NoticeItem key={index}>{item}</NoticeItem>
          ))}
        </NoticeList>
      </Wrapper>
      ;
    </Wrapper>
  );
}

export default QuizNotice;

const NoticeList = styled.ul`
  list-style: disc;
  list-style-type: disc;
  padding-left: 25px;
`;

const NoticeItem = styled.li`
  ${({ theme }) => theme.Typography.Body2LongRegular};
  color: ${({ theme }) => theme.Color.TextIcon.info};
  margin-bottom: 6px;
`;

const notice = [
  "이벤트는 2024년 9월 1일부터 2024년 9월 15일까지 매주 일요일에 진행됩니다.",
  "현대자동차 공식 홈페이지 또는 지정된 이벤트 페이지에서 참여 가능합니다.",
  "퀴즈의 정답을 정확히 기재한 경우에만 경품을 지급해 드립니다.",
  "이벤트 참여를 위해 제공된 개인정보는 당첨자 관리 및 마케팅 운영 목적 외에는 사용되지 않으며, 일정 기간 후 파기됩니다.",
  "당첨자는 이벤트 종료 후 10일 이내에 개별 연락을 통해 발표됩니다.",
  "발표일은 상황에 따라 변경될 수 있으며, 변경 시 홈페이지를 통해 공지됩니다.",
  "이벤트 참여자는 본 유의사항을 숙지하고 동의한 것으로 간주합니다.",
  "주최 측의 사정에 따라 이벤트 내용이 변경될 수 있으며, 변경 시 홈페이지를 통해 공지됩니다.",
  "기타 문의 사항은 현대자동차 고객센터로 연락 바랍니다.",
];
