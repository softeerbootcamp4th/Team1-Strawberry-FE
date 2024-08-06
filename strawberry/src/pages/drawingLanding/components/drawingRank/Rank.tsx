import styled from "styled-components";

import { Label, theme, Wrapper } from "../../../../core/design_system";

import GoldRankBadge from "../../../../assets/images/icons/GoldRankBadge.svg";
import SilverRankBadge from "../../../../assets/images/icons/SilverRankBadge.svg";
import BronzeRankBadge from "../../../../assets/images/icons/BronzeRankBadge.svg";
import NormalRankBadge from "../../../../assets/images/icons/NormalRankBadge.svg";

interface RankProps {
  rank: number;
  name: string;
  score: number;
}

function Rank(props: RankProps) {
  const { rank, name, score } = props;

  return (
    <RankStyle>
      <Wrapper
        display="flex"
        $gap="90px"
        $alignitems="center"
        width="fit-content"
      >
        <Wrapper $position="relative" width="54px" height="54px">
          <img src={getRankBadgeImg(rank)}></img>
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

  function getRankBadgeImg(rank: number) {
    switch (rank) {
      case 1:
        return GoldRankBadge;
      case 2:
        return SilverRankBadge;
      case 3:
        return BronzeRankBadge;
      default:
        return NormalRankBadge;
    }
  }
}

export default Rank;

const RankLabelWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RankStyle = styled.div`
  width: auto;
  padding: 16px 43px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 0px 3.252px 0px rgba(0, 0, 0, 0.15);
`;
