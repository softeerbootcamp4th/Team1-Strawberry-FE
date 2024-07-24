import Border from "./border";
import Color from "./color";
import Shadow from "./shadow";
import Typography from "./typography";
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
