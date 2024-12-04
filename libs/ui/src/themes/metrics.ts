import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

export const spacing = {
  px: 1,
  '0': 0,
  '0.5': 2,
  '1': 4,
  '1.25': 5,
  '1.5': 6,
  '1.75': 7,
  '2': 8,
  '2.5': 10,
  '2.75': 11,
  '3': 12,
  '3.25': 13,
  '3.5': 14,
  '3.75': 15,
  '4': 16,
  '4.25': 17,
  '4.5': 18,
  '5': 20,
  '5.25': 21,
  '5.5': 22,
  '5.75': 23,
  '6': 24,
  '6.25': 25,
  '6.5': 27,
  '7': 28,
  '7.5': 30,
  '7.75': 31,
  '8': 32,
  '8.5': 33,
  '9': 36,
  '9.5': 38,
  '10': 40,
  '10.5': 42,
  '11': 45,
  '12': 48,
  '13': 52,
  '14': 56,
  '15': 60,
  '16': 64,
  '20': 80,
  '20.5': 82,
  '22': 88,
  '24': 96,
  '25': 100,
  '30': 120,
  '32': 128,
  '40': 160,
  '48': 192,
  '56': 224,
  '64': 256,
  '72': 288,
  '80': 320,
  '96': 384,
  true: 4,
} as const;

export const Metrics = {
  screenHeight,
  screenWidth,

  marginBottomScreen: 36,

  padding: {},

  margin: {},

  zIndex: {},

  border: {},

  borderRadius: {
    ...spacing,
    none: 0,
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    true: 5,
    '2xl': 16,
    '3xl': 24,
    '4xl': 26,
    full: 9999,
    circle: '50%',
  },

  shadowOffset: {},

  size: {
    ...spacing,
    full: '100%',
    inputHeightMedium: 45,
  } as const,
};
