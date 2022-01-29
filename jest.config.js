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
    '@modules/(.*)$': '<rootDir>/src/modules/$1',
    '@libs/(.*)$': '<rootDir>/src/libs/$1',
  },
};
