import styled from "styled-components";
import { Label, theme, Wrapper } from "../../../../core/design_system";
import Rank from "./Rank";

interface ScoreData {
  name: string;
  score: number;
}

const top20Scores: ScoreData[] = [
  { name: "김*민", score: 98.5 },
  { name: "박*수", score: 97.3 },
  { name: "이*영", score: 96.8 },
  { name: "최*현", score: 95.6 },
  { name: "정*진", score: 94.9 },
  { name: "강*호", score: 93.7 },
  { name: "조*은", score: 92.5 },
  { name: "윤*서", score: 91.8 },
  { name: "임*준", score: 90.4 },
  { name: "장*우", score: 89.2 },
  { name: "오*라", score: 88.9 },
  { name: "한*진", score: 87.7 },
  { name: "서*희", score: 86.3 },
  { name: "신*수", score: 85.9 },
  { name: "전*현", score: 84.6 },
  { name: "홍*기", score: 83.4 },
  { name: "배*주", score: 82.7 },
  { name: "양*원", score: 81.2 },
  { name: "권*민", score: 80.8 },
  { name: "안*성", score: 79.5 },
];

function DrawingRank() {
  return (
    <Wrapper
      $boxsizing="border-box"
      $backgroundcolor={theme.Color.Ivory.ivory200}
      $padding="100px"
    >
      <Wrapper width="50%" $margin="0 auto">
        <Label
          width="100%"
          $token="Display2Medium"
          color={theme.Color.TextIcon.default}
          $textalign="center"
        >
          현재 이벤트 랭킹
        </Label>
        <MyScore>
          <Label $token="Heading1Regular" color={theme.Color.TextIcon.sub}>
            내 최고 점수
          </Label>
          <Label $token="Title3Medium" color={theme.Color.TextIcon.strong}>
            100.0점
          </Label>
        </MyScore>
        <Label
          width="100%"
          $token="Heading2Regular"
          color={theme.Color.TextIcon.info}
          $textalign="right"
        >
          24.07.19 10:55 업데이트
        </Label>
        {top20Scores.map((data, index) => (
          <Rank
            key={index}
            rank={index + 1}
            name={data.name}
            score={data.score}
          />
        ))}
      </Wrapper>
    </Wrapper>
  );
}

export default DrawingRank;

const MyScore = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 60px 0 60px;
  border: ${({ theme }) => `2px solid ${theme.Color.Event.drawing_default}`};
  background: rgba(183, 206, 97, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 73px;
  margin: 36px 0;
`;
