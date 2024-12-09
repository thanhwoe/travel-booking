import { spacing } from './metrics';

export const fontConfig = {
  type: {},
  size: {
    ...spacing,
    headingMedium: 24,
    textExtraSmall: 12,
    textSmall: 14,
    true: 16,
  },
  lineHeight: {
    '5.5': 22.4,
  },
  letterSpacing: {},
};

export const getFontFace = (fontFamily = 'OpenSans') => ({
  family: fontFamily,
  normal: { normal: `${fontFamily}-Regular` },
  bold: { normal: `${fontFamily}-Bold` },
  300: { normal: `${fontFamily}-Light` },
  400: { normal: `${fontFamily}-Regular` },
  700: { normal: `${fontFamily}-Bold` },
});
