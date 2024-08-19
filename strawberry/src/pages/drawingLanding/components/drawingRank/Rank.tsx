import styled from "styled-components";

import { Label, theme, Wrapper } from "../../../../core/design_system";

import { useRankBadgeImage } from "../../hooks/useRankBadgeImg";

interface RankProps {
  rank: number;
  name: string;
  score: number;
}

function Rank(props: RankProps) {
  const { rank, name, score } = props;

  const badgeImg = useRankBadgeImage(rank);

  return (
    <RankStyle>
      <Wrapper
        display="flex"
        $gap="90px"
        $alignitems="center"
        width="fit-content"
      >
        <Wrapper $position="relative" width="54px" height="54px">
          <img src={badgeImg} alt={`Rank ${rank} Badge`} />
          <RankLabelWrapper>
            <Label $token="Title2Medium" color={theme.Color.TextIcon.reverse}>
              {rank}
            </Label>
          </RankLabelWrapper>
        </Wrapper>
        <Label $token="Title2Medium" color={theme.Color.TextIcon.strong}>
          {name}
        </Label>
      </Wrapper>
      <Label $token="Title1Medium" color={theme.Color.TextIcon.strong}>
        {score}점
      </Label>
    </RankStyle>
  );
}

export default Rank;

const RankLabelWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const RankStyle = styled.div`
  width: auto;
  margin-top: 16px;
  padding: 16px 43px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 0px 3.252px 0px rgba(0, 0, 0, 0.15);
`;
