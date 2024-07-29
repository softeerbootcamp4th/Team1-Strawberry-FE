import Border from "./foundation/border";
import Color from "./foundation/color";
import Shadow from "./foundation/shadow";
import Typography from "./foundation/typography";
import "styled-components";

const theme = {
  Border,
  Color,
  Shadow,
  Typography,
};
export default theme;

type ThemeType = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
