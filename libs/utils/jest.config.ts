/* eslint-disable */
export default {
  displayName: '@shared/utils',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'web.js', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/utils',
  // setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
};
