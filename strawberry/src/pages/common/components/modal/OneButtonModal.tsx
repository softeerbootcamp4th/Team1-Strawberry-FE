import { useEffect } from "react";

import { theme, Label, Wrapper } from "../../../../core/design_system";
import { useGlobalState } from "../../../../core/hooks/useGlobalState";
import { useGlobalDispatch } from "../../../../core/hooks/useGlobalDispatch";

import ModalButton from "../buttons/ModalButton";

function OneButtonModal() {
  const globalDispatch = useGlobalDispatch();

  function closeModal() {
    globalDispatch?.({ type: "CLOSE_MODAL" });
  }

  const {
    title,
    imgPath,
    info,
    whiteBtnContent,
    onWhiteBtnClick,
    primaryBtnContent,
    onPrimaryBtnClick,
    enter,
  } = useGlobalState().modalProps || {};

  useEffect(() => {
    if (enter) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter" && onPrimaryBtnClick) {
          onPrimaryBtnClick();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [enter]);

  return (
    <>
      <Wrapper
        width="100%"
        display="flex"
        $flexdirection="column"
        $alignitems="center"
      >
        <Label $token="Title1Medium" color={theme.Color.Primary.normal}>
          {title}
        </Label>
        {imgPath && (
          <Wrapper width="100%" $margin="24px 0 0 0">
            <img src={imgPath} width={"100%"} height={"100%"} />
          </Wrapper>
        )}
        <Label
          width="100%"
          $margin="24px 0 0 0"
          $token="Heading2Regular"
          color={theme.Color.TextIcon.sub}
          $textalign="center"
        >
          {info}
        </Label>
        <Wrapper
          width="100%"
          display="flex"
          $flexdirection="row"
          $justifycontent="space-between"
          $margin="48px 0 0 0"
          $gap="15px"
        >
          {primaryBtnContent && (
            <ModalButton
              modalType="PRIMARY_SMALL"
              content={primaryBtnContent || ""}
              onClick={onPrimaryBtnClick || closeModal}
            />
          )}
          {whiteBtnContent && (
            <ModalButton
              modalType="WHITE_SMALL"
              content={whiteBtnContent || ""}
              onClick={onWhiteBtnClick || closeModal}
            />
          )}
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default OneButtonModal;
