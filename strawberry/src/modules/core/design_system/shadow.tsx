import { css } from "styled-components";

const createRGBA = (r: number, g: number, b: number, a: number) =>
  `rgba(${r}, ${g}, ${b}, ${a})`;

const rgbaColors = {
  shadowLight: createRGBA(0, 0, 0, 0.08),
  shadowMedium: createRGBA(0, 0, 0, 0.12),
};

const createBoxShadow = (
  firstOffset: string,
  secondOffset: string,
  thirdOffset: string,
  firstColor: string,
  secondColor: string,
  thirdColor: string,
) => css`
  box-shadow:
    ${firstOffset} ${firstColor},
    ${secondOffset} ${secondColor},
    ${thirdOffset} ${thirdColor};
`;

const Normal = createBoxShadow(
  "0px 1px 2px 0px",
  "0px 0px 1px 0px",
  "0px 0px 1px 0px",
  rgbaColors.shadowMedium,
  rgbaColors.shadowLight,
  rgbaColors.shadowLight,
);

const Emphazie = createBoxShadow(
  "0px 2px 8px 0px",
  "0px 1px 4px 0px",
  "0px 0px 1px 0px",
  rgbaColors.shadowMedium,
  rgbaColors.shadowLight,
  rgbaColors.shadowLight,
);

const Strong = createBoxShadow(
  "0px 6px 12px 0px",
  "0px 4px 8px 0px",
  "0px 0px 4px 0px",
  rgbaColors.shadowMedium,
  rgbaColors.shadowLight,
  rgbaColors.shadowLight,
);

const Heavy = createBoxShadow(
  "0px 16px 20px 0px",
  "0px 8px 16px 0px",
  "0px 0px 8px 0px",
  rgbaColors.shadowMedium,
  rgbaColors.shadowLight,
  rgbaColors.shadowLight,
);

const Shadow = {
  Normal,
  Emphazie,
  Strong,
  Heavy,
};

export default Shadow;
