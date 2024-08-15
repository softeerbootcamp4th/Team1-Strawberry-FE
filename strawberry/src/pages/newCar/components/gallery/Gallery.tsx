import styled from "styled-components";

import { Label, theme, Wrapper } from "../../../../core/design_system";

import useGallery from "../../hooks/useGallery";

import gallery_interior from "/src/assets/images/background/gallery_interior.svg";
import gallery_exterior from "/src/assets/images/background/gallery_exterior.svg";

function Gallery() {
  const { isFading, isInterior, handleInterior, handleExterior } = useGallery();

  return (
    <>
      <GalleryWrapper>
        <Wrapper
          display="flex"
          height="fit-content"
          $justifycontent="space-between"
          $alignitems="center"
          width="1440px"
        >
          <Label $token="Display1Medium" color={theme.Color.TextIcon.default}>
            Gallery
          </Label>
          <Wrapper width="fit-content">
            <button onClick={handleInterior}>버튼1</button>
            <button onClick={handleExterior}>버튼2</button>
          </Wrapper>
        </Wrapper>
        <Wrapper display="flex" $justifycontent="center" $margin="24px 0 0 0">
          <FadeWrapper isFading={isFading}>
            {isInterior ? (
              <img src={gallery_interior} alt="gallery_interior" />
            ) : (
              <img src={gallery_exterior} alt="gallery_exterior" />
            )}
          </FadeWrapper>
        </Wrapper>
      </GalleryWrapper>
    </>
  );
}

export default Gallery;

const GalleryWrapper = styled.div`
  width: 100%;
  padding: 80px 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #ffe9dd 0%, #fff 100%);
  box-sizing: border-box;
`;

const FadeWrapper = styled.div<{ isFading: boolean }>`
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.isFading ? 0 : 1)};
`;
