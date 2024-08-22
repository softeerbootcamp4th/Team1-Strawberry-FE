import { theme, Wrapper, Label } from "../../../../core/design_system";

import { DesignType } from "../../models";

import { useDesignTitle } from "../../hooks/useDesignTitle";

interface DesignDetailTitleProps {
  designType: DesignType;
}

function DesignDetailTitle(props: DesignDetailTitleProps) {
  const { designType } = props;
  const { designTitle } = useDesignTitle(designType);

  return (
    <Wrapper
      display="flex"
      $flexdirection="column"
      $justifycontent="center"
      $alignitems="center"
      $gap="8px"
    >
      <Label $token="Display2Medium" color={theme.Color.TextIcon.default}>
        {designTitle?.title}
      </Label>
      <Label $token="Heading1Regular" color={theme.Color.TextIcon.sub}>
        {designTitle?.description}
      </Label>
    </Wrapper>
  );
}

export default DesignDetailTitle;
