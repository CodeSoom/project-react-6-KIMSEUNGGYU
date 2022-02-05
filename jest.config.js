module.exports = {
  setupFilesAfterEnv: [
    'given2/setup',
    'jest-plugin-context/setup',
    './jest.setup',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/$1',
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@containers/(.*)$': '<rootDir>/src/containers/$1',
    '@pages/(.*)$': '<rootDir>/src/pages/$1',
    '@modules/(.*)$': '<rootDir>/src/modules/$1',
    '@libs/(.*)$': '<rootDir>/src/libs/$1',
    '@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
  },
};
