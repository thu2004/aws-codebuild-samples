'use strict';

module.exports = {
  clearMocks: true,
  testEnvironment: 'node',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/database/migrations/*.js',
    '!<rootDir>/src/**/database/model/*.js',
  ],
  testPathIgnorePatterns: ['\\.build', 'dist', 'node_modules'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testTimeout: 60000,
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'testReports',
      outputName: 'preval-tests.xml',
    }],
  ],
};
