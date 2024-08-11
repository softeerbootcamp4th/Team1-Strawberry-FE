import ModalButton from "../buttons/ModalButton";
import { Label, theme, Wrapper } from "../../../../core/design_system";
import { useGlobalState } from "../../../../core/hooks/useGlobalState";
import { useGlobalDispatch } from "../../../../core/hooks/useGlobalDispatch";

function TwoButtonModal() {
  const globalDispatch = useGlobalDispatch();

  function closeModal() {
    globalDispatch?.({ type: "CLOSE_MODAL" });
  }

  const {
    title,
    imgPath,
    info,
    whiteBtnContent,
    primaryBtnContent,
    onWhiteBtnClick,
    onPrimaryBtnClick,
  } = useGlobalState().modalProps || {};

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
          <ModalButton
            modalType="WHITE_SMALL"
            content={whiteBtnContent || ""}
            onClick={onWhiteBtnClick || closeModal}
          />
          <ModalButton
            modalType="PRIMARY_SMALL"
            content={primaryBtnContent || ""}
            onClick={onPrimaryBtnClick}
          />
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default TwoButtonModal;
