import styled from "styled-components";

import { Label, theme, Wrapper } from "../../../../core/design_system";

interface EventNoticeProps {
  title: string;
  notices: string[];
}

function EventNotice(props: EventNoticeProps) {
  const { title, notices } = props;
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
          {title}
        </Label>
        <NoticeList>
          {notices.map((item, index) => (
            <NoticeItem key={index}>{item}</NoticeItem>
          ))}
        </NoticeList>
      </Wrapper>
      ;
    </Wrapper>
  );
}

export default EventNotice;

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
