import styled from "styled-components";

import { Label, theme, Wrapper } from "../../../../core/design_system";

import useGallery from "../../hooks/useGallery";

import { GalleryType } from "../../models";

import FoundationRadioButtons from "../FoundationRadioButton";

function NewCarGallery() {
  const { buttons, actionCreator, selector, imgs, state } = useGallery();

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
              <FoundationRadioButtons<GalleryType>
                buttons={buttons}
                actionCreator={actionCreator}
                selector={selector}
              />
            </Wrapper>
          </Wrapper>
          <img width="100%" src={imgs[state.galleryType]} />
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
