const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: '.' });

const custromJestConfig = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  setupFiles: ['<rootDir>/setupJest.js'],
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};

module.exports = createJestConfig(custromJestConfig);
