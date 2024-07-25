// Colors.ts

const Blue = {
  blue100: "#CCD5DF",
  blue200: "#99ABBF",
  blue300: "#66809F",
  blue400: "#33567F",
  blue500: "#002C5F",
  blue600: "#00234C",
  blue700: "#001A39",
  blue800: "#001226",
  blue900: "#000913",
};

const Ivory = {
  ivory100: "#fdfdfc",
  ivory200: "#fbfafa",
  ivory300: "#faf8f7",
  ivory400: "#f8f5f5",
  ivory500: "#f6f3f2",
  ivory600: "#c5c2c2",
  ivory700: "#949291",
  ivory800: "#626161",
  ivory900: "#313130",
};

const Common = {
  black: "#000000",
};

const Neutral = {
  neutral5: "#0f0f10",
  neutral7: "#141415",
  neutral10: "#171719",
  neutral15: "#1b1c1e",
  neutral17: "#212225",
  neutral20: "#292a2d",
  neutral22: "#2e2f33",
  neutral23: "#333438",
  neutral25: "#37383c",
  neutral30: "#46474c",
  neutral40: "#5a5c63",
  neutral50: "#70737c",
  neutral60: "#878a93",
  neutral70: "#989ba2",
  neutral80: "#aeb0b6",
  neutral90: "#c2c4c8",
  neutral95: "#dbdcdf",
  neutral96: "#e1e2e4",
  neutral97: "#eaebec",
  neutral98: "#f4f4f5",
  neutral99: "#f7f7f8",
};

const Red = {
  red100: "#F8D7DA",
  red200: "#F5C6CB",
  red500: "#DC3545",
  red600: "#C82333",
};

const Event = {
  quiz_default: "#FF8126",
  quiz_disabled: "#FFCDA8",
  drawing_default: "#B7CE61",
  drawing_disabled: "#DBE7B0",
};

const Color = {
  Blue,
  Ivory,
  Common,
  Neutral,
  Red,
  Event,

  Primary: {
    normal: Blue.blue500,
    hover: Blue.blue400,
    active: Blue.blue600,
  },

  TextIcon: {
    default: Neutral.neutral10,
    strong: Common.black,
    sub: Neutral.neutral30,
    info: Neutral.neutral60,
    assistive: Neutral.neutral90,
    disable: Neutral.neutral96,
    reverse: Neutral.neutral99,
  },

  Background: {
    default: Ivory.ivory500,
    alternative: Neutral.neutral99,
    strong: Neutral.neutral95,
    hover: Neutral.neutral98,
  },

  Dimmer: {
    default: "rgba(0, 0, 0, 0.6)",
  },

  Border: {
    default: Neutral.neutral96,
    sub: Neutral.neutral97,
    alternative: Neutral.neutral98,
    strong: Neutral.neutral80,
  },

  Danger: {
    text: Red.red600,
    base: Red.red500,
    border: Red.red200,
    surface: Red.red100,
  },

  Information: {
    text: Blue.blue400,
    base: Blue.blue500,
    border: Blue.blue200,
    surface: Blue.blue100,
  },
};

export default Color;
