// src/typography.tsx

import { css } from "styled-components";

const weight = {
  Medium: 500,
  Regular: 400,
  Light: 300,
};

const fontSize = {
  Display1: "52px",
  Display2: "46px",
  Title1: "36px",
  Title2: "28px",
  Title3: "24px",
  Heading1: "22px",
  Heading2: "18px",
  Body1: "16px",
  Body2: "14px",
  Body3: "13px",
  Caption: "12px",
};

const lineHeight = {
  Display1: "72px",
  Display2: "62px",
  Title1: "48px",
  Title2: "38px",
  Title3: "32px",
  Heading1: "30px",
  Heading2: "26px",
  Body1: "24px",
  Body1Long: "26px",
  Body2: "20px",
  Body2Long: "22px",
  Body3: "15px",
  Caption: "16px",
};

const letterSpacing = {
  normal: "-0.025em",
};

const createTypographyStyle = (
  fontSizeKey: keyof typeof fontSize,
  fontWeight: keyof typeof weight,
  lineHeightKey: keyof typeof lineHeight,
) => css`
  font-size: ${fontSize[fontSizeKey]};
  font-weight: ${weight[fontWeight]};
  line-height: ${lineHeight[lineHeightKey]};
  letter-spacing: ${letterSpacing.normal};
`;

const Typography = {
  Display1Medium: createTypographyStyle("Display1", "Medium", "Display1"),
  Display1Regular: createTypographyStyle("Display1", "Regular", "Display1"),
  Display2Medium: createTypographyStyle("Display2", "Medium", "Display2"),
  Display2Regular: createTypographyStyle("Display2", "Regular", "Display2"),
  Title1Medium: createTypographyStyle("Title1", "Medium", "Title1"),
  Title1Regular: createTypographyStyle("Title1", "Regular", "Title1"),
  Title2Medium: createTypographyStyle("Title2", "Medium", "Title2"),
  Title2Regular: createTypographyStyle("Title2", "Regular", "Title2"),
  Title3Medium: createTypographyStyle("Title3", "Medium", "Title3"),
  Title3Regular: createTypographyStyle("Title3", "Regular", "Title3"),
  Heading1Medium: createTypographyStyle("Heading1", "Medium", "Heading1"),
  Heading1Regular: createTypographyStyle("Heading1", "Regular", "Heading1"),
  Heading1Light: createTypographyStyle("Heading1", "Light", "Heading1"),
  Heading2Medium: createTypographyStyle("Heading2", "Medium", "Heading2"),
  Heading2Regular: createTypographyStyle("Heading2", "Regular", "Heading2"),
  Heading2Light: createTypographyStyle("Heading2", "Light", "Heading2"),
  Body1Medium: createTypographyStyle("Body1", "Medium", "Body1"),
  Body1Regular: createTypographyStyle("Body1", "Regular", "Body1"),
  BodyLight: createTypographyStyle("Body1", "Light", "Body1"),
  Body1LongMedium: createTypographyStyle("Body1", "Medium", "Body1Long"),
  Body1LongRegular: createTypographyStyle("Body1", "Regular", "Body1Long"),
  Body1LongLight: createTypographyStyle("Body1", "Light", "Body1Long"),
  Body2Medium: createTypographyStyle("Body2", "Medium", "Body2"),
  Body2Regular: createTypographyStyle("Body2", "Regular", "Body2"),
  Body2Light: createTypographyStyle("Body2", "Light", "Body2"),
  Body2LongMedium: createTypographyStyle("Body2", "Medium", "Body2Long"),
  Body2LongRegular: createTypographyStyle("Body2", "Regular", "Body2Long"),
  Body2LongLight: createTypographyStyle("Body2", "Light", "Body2Long"),
  Body3Medium: createTypographyStyle("Body3", "Medium", "Body3"),
  Body3Regular: createTypographyStyle("Body3", "Regular", "Body3"),
  Body3Light: createTypographyStyle("Body3", "Light", "Body3"),
  CaptionMedium: createTypographyStyle("Caption", "Medium", "Caption"),
  CaptionRegular: createTypographyStyle("Caption", "Regular", "Caption"),
  CaptionLight: createTypographyStyle("Caption", "Light", "Caption"),
} as const;

export default Typography;
export type TypographyVariant = keyof typeof Typography;
