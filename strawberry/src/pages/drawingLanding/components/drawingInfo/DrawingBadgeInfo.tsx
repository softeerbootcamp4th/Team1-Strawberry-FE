import styled from "styled-components";

import { Label, Wrapper } from "../../../../core/design_system";
import { RewardDimmer } from "../../../common/components";

interface DrawingBadgeInfoStyleProps {
  isSmallGap: boolean;
}

interface DrawingBadgeInfoProps extends DrawingBadgeInfoStyleProps {
  isAcquired: boolean;
  imgSource: string;
  description: string;
}

function DrawingBadgeInfo(props: DrawingBadgeInfoProps) {
  const { isSmallGap, isAcquired, imgSource, description } = props;
  return (
    <Wrapper $position="relative">
      <BadgeInfo isSmallGap={isSmallGap}>
        <img src={imgSource} />
        <Label $token="Title3Medium" $textalign="center">
          {description}
        </Label>
      </BadgeInfo>
      {isAcquired && <RewardDimmer content="획득 완료" />}
    </Wrapper>
  );
}

export default DrawingBadgeInfo;

const BadgeInfo = styled.div<DrawingBadgeInfoStyleProps>`
  padding: 0 60px;
  background-color: ${({ theme }) => theme.Color.Ivory.ivory200};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  gap: ${({ isSmallGap }) => (isSmallGap ? "10px" : "40px")};
`;
