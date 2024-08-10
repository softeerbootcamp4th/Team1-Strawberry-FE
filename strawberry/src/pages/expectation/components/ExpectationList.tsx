import styled from "styled-components";

import { Label, theme } from "../../../core/design_system";

import { ExpectationListProps } from "../hooks/apis/useExpectationListQuery";

function ExpectationList(props: ExpectationListProps) {
  const { name, comment } = props;
  return (
    <>
      <ExpectationListWrapper>
        <Label
          width="100%"
          $token="Body1LongRegular"
          color={theme.Color.Primary.normal}
        >
          {name}
        </Label>
        <Label
          width="100%"
          $token="Heading2Regular"
          color={theme.Color.TextIcon.default}
        >
          {comment}
        </Label>
      </ExpectationListWrapper>
    </>
  );
}

export default ExpectationList;

const ExpectationListWrapper = styled.div`
  width: 960px;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.Color.Common.white};
  margin: 0 0 16px 0;
`;
