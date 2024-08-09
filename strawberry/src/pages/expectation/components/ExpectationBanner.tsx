import styled from "styled-components";

interface ExpectationBannerProps {
  bannerImg: string;
}

function ExpectationBanner({ bannerImg }: ExpectationBannerProps) {
  return <StyledImg src={bannerImg} />;
}

export default ExpectationBanner;

const StyledImg = styled.img`
  z-index: 2;
  width: 1440px;
  height: 500px;
`;
