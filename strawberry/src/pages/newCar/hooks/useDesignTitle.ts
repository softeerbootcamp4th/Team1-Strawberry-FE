import { DesignType } from "../models";

import { getDesignTitle } from "../services/designTitleService";

export function useDesignTitle(type: DesignType) {
  const designTitle = getDesignTitle(type);

  return {
    designTitle,
  };
}
