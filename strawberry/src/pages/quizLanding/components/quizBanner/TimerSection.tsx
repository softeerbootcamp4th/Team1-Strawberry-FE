import styled from "styled-components";
import { Label, theme, Wrapper } from "../../../../core/design_system";

interface TimerSectionProps {
  number: number;
  text: string;
}

function TimerSection({ number, text }: TimerSectionProps) {
  return (
    <Wrapper width="180px">
      <BigText>{number}</BigText>
      <Label
        $token="Heading1Light"
        width="100%"
        $textalign="center"
        color={theme.Color.TextIcon.assistive}
      >
        {text}
      </Label>
    </Wrapper>
  );
}

export default TimerSection;

const BigText = styled.p`
  color: ${({ theme }) => theme.Color.TextIcon.reverse};
  font-size: 82px;
  font-weight: 400;
  line-height: 140%;
  text-align: center;
`;
