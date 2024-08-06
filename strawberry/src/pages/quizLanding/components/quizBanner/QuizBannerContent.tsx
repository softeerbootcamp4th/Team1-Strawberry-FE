import styled from "styled-components";

import { theme, Label, Line, Wrapper } from "../../../../core/design_system";

interface QuizBannerContentProps {
  placeholder: string;
  title: string;
}

function QuizBannerContent(props: QuizBannerContentProps) {
  const { title, placeholder } = props;

  return (
    <>
      <Label
        $token="Title3Regular"
        color={theme.Color.TextIcon.reverse}
        $margin="0px 0px 12px 0px"
      >
        퀴즈 이벤트
      </Label>
      <Label
        $token="Display2Medium"
        color={theme.Color.TextIcon.reverse}
        $margin="0px 0px 60px 0px"
      >
        {title}
      </Label>
      <Wrapper width="min-content" height="fit-content">
        <Line $backgroundcolor={theme.Color.TextIcon.disable} />
        <Wrapper display="flex" $gap="8px" $padding="5px 0px 5px 0px">
          {Array.from(placeholder).map((char, index) => (
            <PlaceHolder key={index}>{char}</PlaceHolder>
          ))}
        </Wrapper>
        <Line $backgroundcolor={theme.Color.TextIcon.disable} />
      </Wrapper>
    </>
  );
}

export default QuizBannerContent;

const PlaceHolder = styled.div`
  width: 73px;
  height: 73px;

  display: flex;
  justify-content: center;

  font-size: 66px;
  font-weight: 400;
  line-height: 72px;
  color: ${({ theme }) => theme.Color.TextIcon.disable};
  border: 1px solid ${({ theme }) => theme.Color.TextIcon.disable};
`;
