export default {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  testMatch: ['<rootDir>/tests/**/*.test.ts'], // Run tests from `tests` folder only
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};