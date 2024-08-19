import styled from "styled-components";

import { theme, Label } from "../../../../core/design_system";

import { formatStartAtToDate } from "../../../../core/utils/formatStartAtToDate";

interface ContentProps {
  startAt: string;
}

const OpeningContent = ({ startAt }: ContentProps) => {
  const formattedDate = formatStartAtToDate(startAt);
  return (
    <ScheduleContainer>
      <Label $token="Title2Regular" color={theme.Color.TextIcon.reverse}>
        {`${formattedDate} 오픈 예정`}
      </Label>
    </ScheduleContainer>
  );
};

export default OpeningContent;

const ScheduleContainer = styled.div`
  background-color: #af6f53;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
