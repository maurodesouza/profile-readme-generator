module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/pages/**/*.ts(x)?',
    '!src/templates/**/*.ts(x)?',
    '!src/services/**/*.ts(x)?',
    '!src/styles/**/*.ts',
    '!src/types/**/*.ts',

    // Temp

    '!src/app/**/*.ts(x)?',
    '!src/generators/**/*.ts(x)?',
    '!src/components/**/*.ts(x)?',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest/'],
};
