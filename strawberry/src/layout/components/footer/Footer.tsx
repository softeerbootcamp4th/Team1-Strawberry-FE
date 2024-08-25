import styled from "styled-components";

import { Wrapper, ImageEnum, Label, theme } from "../../../core/design_system";

import { PATHS } from "./paths"; // 대문자로 변경된 경로 객체 임포트

function Footer() {
  return (
    <>
      <StyledFooter>
        <Wrapper
          height="120px"
          width="1280px"
          display="flex"
          $justifycontent="space-between"
        >
          <Wrapper width="fit-content">
            <img src={ImageEnum.IMAGES.FOOTER.LOGO} alt="logo" />
          </Wrapper>
          <Wrapper
            display="flex"
            $flexdirection="column"
            $justifycontent="space-between"
            width="fit-content"
          >
            <Wrapper
              height="fit-content"
              display="flex"
              $gap="12px"
              $alignitems="center"
            >
              <TextButton href={PATHS.APP}>모바일 App</TextButton>
              <Seperator />
              <TextButton href={PATHS.COPYRIGHT}>저작권 안내</TextButton>
              <Seperator />
              <TextButton href={PATHS.POLICY}>개인정보 처리방침</TextButton>
              <Seperator />
              <TextButton href={PATHS.AGREEMENT}>이용약관</TextButton>
              <Seperator />
              <TextButton href={PATHS.PRIVACY}>프라이버시 센터</TextButton>
            </Wrapper>
            <Wrapper display="flex" $gap="12px" $alignitems="center">
              <TextButton href={PATHS.ADUIT}>윤리 사이버 감사실</TextButton>
              <Seperator />
              <TextButton href={PATHS.CCTV}>
                영상정보처리기기 운영관리방침
              </TextButton>
              <Seperator />
              <TextButton href={PATHS.SITEMAP}>사이트맵</TextButton>
            </Wrapper>
            <Label $token="Body2Regular" color={theme.Color.TextIcon.info}>
              고객센터 : 080-600-6000
            </Label>
            <Label
              $margin="4px 0 0 0"
              $token="Body2Regular"
              color={theme.Color.TextIcon.info}
            >
              COPYRIGHT ⓒ HYUNDAI MOTOR COMPANY. ALL RIGHTS RESERVED.
            </Label>
          </Wrapper>
          <Wrapper
            width="fit-content"
            $gap="10px"
            display="flex"
            $alignitems="start"
          >
            <TextButton href={PATHS.YOUTUBE}>
              <img src={ImageEnum.IMAGES.FOOTER.YOUTUBE} alt="YouTube" />
            </TextButton>
            <TextButton href={PATHS.INSTAGRAM}>
              <img src={ImageEnum.IMAGES.FOOTER.INSTAGRAM} alt="Instagram" />
            </TextButton>
            <TextButton href={PATHS.FACEBOOK}>
              <img src={ImageEnum.IMAGES.FOOTER.FACEBOOK} alt="Facebook" />
            </TextButton>
            <TextButton href={PATHS.X}>
              <img src={ImageEnum.IMAGES.FOOTER.X} alt="X (Twitter)" />
            </TextButton>
            <TextButton href={PATHS.ITEM1}>
              <img src={ImageEnum.IMAGES.FOOTER.ITEM1} alt="Item 1" />
            </TextButton>
            <TextButton href={PATHS.ITEM2}>
              <img src={ImageEnum.IMAGES.FOOTER.ITEM2} alt="Item 2" />
            </TextButton>
            <TextButton href={PATHS.ITEM3}>
              <img src={ImageEnum.IMAGES.FOOTER.ITEM3} alt="Item 3" />
            </TextButton>
          </Wrapper>
        </Wrapper>
      </StyledFooter>
    </>
  );
}

export default Footer;

function Seperator() {
  return (
    <>
      <Label $token="Body2Regular" color={theme.Color.TextIcon.info}>
        |
      </Label>
    </>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Color.Neutral.neutral10};
`;

const TextButton = styled.a`
  color: ${({ theme }) => theme.Color.TextIcon.info};
  ${({ theme }) => theme.Typography.Body2Regular}
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
