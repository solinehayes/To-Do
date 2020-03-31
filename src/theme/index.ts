const colors = {
  sunsetOrange: "#FF4A4A",
  caribbeanGreen: "#00D498",
  koromiko: "#FFC36A",
  dodgerBlue: "#485BFF",
  brightSun: "#FFD748",
  pinkFlamingo: "#FF65DD",
  black: "#000000",
  white: "#FFFFFF",
  silver: "#BFBFBF",
  transparent: "transparent",
  yellow: "#f0ff00",
  supernova: "#ffce00",
  orangePeel: "#ff9a00",
  internationalOrange: "#ff5a00",
  red: "#ff0000",
};

const gridUnit = 8;

const fonts = {
  arialBold12: {
    fontFamily: "ArialRoundedMTBold",
    fontSize: 12,
  },
  arialBold14: {
    fontFamily: "ArialRoundedMTBold",
    fontSize: 14,
  },
  arialBold16: {
    fontFamily: "ArialRoundedMTBold",
    fontSize: 16,
  },
  arialBold19: {
    fontFamily: "ArialRoundedMTBold",
    fontSize: 19,
  },
  arialBold20: {
    fontFamily: "ArialRoundedMTBold",
    fontSize: 20,
  },
  helvetica14: {
    fontFamily: "Helvetica",
    fontSize: 14,
  },
  helvetica12: {
    fontFamily: "Helvetica",
    fontSize: 12,
  },
  helveticaBold14: {
    fontFamily: "Helvetica-Bold",
    fontSize: 14,
  },
};

const shadow = {
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 0,
  },
  elevation: 3,
  shadowOpacity: 0.1,
};

export const theme = {
  colors,
  fonts,
  gridUnit,
  shadow,
};
