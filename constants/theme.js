import { Dimensions } from "react-native"
const { width, height } = Dimensions.get("window")

export const COLORS = {
    // base colors
    primary: "#FF615F",
    secondary: "#FF9600",   // Orange

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
    lightGray: "#E8E6EA",
    lightGray2: "#F5F7F9",
    gray: "#BEC1D2",
    darkgray: '#898C95',
    blue: '#42B0FF',
    yellow: '#FFD573',
    lightBlue: '#95A9B8',
    darkgreen: '#008159',
    peach: '#FF615F',
    purple: '#8A2387',
    red: '#FF0000',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: {fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: {fontSize: SIZES.h1, lineHeight: 36 },
    h2: {fontSize: SIZES.h2, lineHeight: 30 },
    h3: {fontSize: SIZES.h3, lineHeight: 22 },
    h4: {fontSize: SIZES.h4, lineHeight: 22 },
    body1: {fontSize: SIZES.body1, lineHeight: 36 },
    body2: {fontSize: SIZES.body2, lineHeight: 30 },
    body3: {fontSize: SIZES.body3, lineHeight: 22 },
    body4: {fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;