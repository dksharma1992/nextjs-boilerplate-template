// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' });

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],

  testEnvironment: 'jest-environment-jsdom',

  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/common/components/$1',
  },

  // collectCoverage: true, //enables collecting coverage
  // collectCoverageFrom: ['src/**/*.{js,tsx,jsx}'],
  // coverageDirectory: 'coverage',  //specifies folder jest will put coverage files
  // testEnvironment: 'jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
