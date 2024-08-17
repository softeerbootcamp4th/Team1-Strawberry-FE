import styled from "styled-components";

import {
  ImageEnum,
  Label,
  theme,
  Wrapper,
} from "../../../../core/design_system";

import useGallery from "../../hooks/useGallery";

import FoundationButton from "../FoundationButton";

function NewCarGallery() {
  const { isFading, isInterior, handleInterior, handleExterior } = useGallery();

  return (
    <>
      <GalleryWrapper>
        <Wrapper width="1440px">
          <Wrapper
            display="flex"
            height="fit-content"
            $justifycontent="space-between"
            $alignitems="center"
          >
            <Label $token="Display1Medium" color={theme.Color.TextIcon.default}>
              Gallery
            </Label>
            <Wrapper width="fit-content">
              <FoundationButton
                variant="SOLID"
                // onClick={handleInterior}
                title="버튼1"
              />
              <FoundationButton
                variant="OUTLINE"
                // onClick={handleExterior}
                title="버튼2"
              />
            </Wrapper>
          </Wrapper>
          <FadeWrapper isFading={isFading}>
            {isInterior ? (
              <img
                width="100%"
                src={ImageEnum.IMAGES.NEWCAR.GALLERY_INTERIOR}
                alt="gallery_interior"
              />
            ) : (
              <img
                width="100%"
                src={ImageEnum.IMAGES.NEWCAR.GALLERY_EXTERIOR}
                alt="gallery_exterior"
              />
            )}
          </FadeWrapper>
        </Wrapper>
      </GalleryWrapper>
    </>
  );
}

export default NewCarGallery;

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
  display: flex;
  justify-content: center;
  margin-top: 24px;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.isFading ? 0 : 1)};
`;
