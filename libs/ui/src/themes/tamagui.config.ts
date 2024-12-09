import { createFont, createTamagui, createTokens, isWeb } from 'tamagui';
import { themes, config } from '@tamagui/config/v3';
import { createMedia } from '@tamagui/react-native-media-driver';
import { shorthands } from '@tamagui/shorthands';
import { animations } from './animations';
import { fontConfig, getFontFace } from './fonts';
import { colorPalette } from './colors';
import { Metrics } from './metrics';

const headingFont = createFont({
  family: getFontFace('Montserrat').family,
  size: { ...config.fonts.heading.size, ...fontConfig.size },
  lineHeight: config.fonts.heading.lineHeight,
  weight: config.fonts.heading.weight,
  letterSpacing: config.fonts.heading.letterSpacing,
  face: getFontFace('Montserrat'),
});

const bodyFont = createFont({
  family: getFontFace(isWeb ? 'Montserrat' : 'OpenSans').family,
  size: { ...config.fonts.body.size, ...fontConfig.size },
  lineHeight: { ...config.fonts.body.lineHeight, ...fontConfig.lineHeight },
  weight: config.fonts.body.weight,
  letterSpacing: config.fonts.body.letterSpacing,
  face: getFontFace(isWeb ? 'Montserrat' : 'OpenSans'),
});

const tokens = createTokens({
  color: {
    ...config.tokens.color,
    ...colorPalette,
  },
  space: { ...Metrics.size },
  radius: { ...Metrics.borderRadius },
  zIndex: { ...config.tokens.zIndex },
  size: { ...Metrics.size },
});

export const tamaguiConfig = createTamagui({
  defaultFont: 'body',
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  onlyAllowShorthands: false,
  animations,
  settings: {
    allowedStyleValues: 'somewhat-strict',
  },
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes,
  shorthands,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
});

type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;
