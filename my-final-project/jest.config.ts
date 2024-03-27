export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.css$': 'jest-transform-stub',
      '^.+\\.jsx?$': 'babel-jest',
      // process `*.tsx` files with `ts-jest`
    },
    rootDir: 'src/',
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/test/__ mocks __/fileMock.js',
      '^@app/(.*)$': '<rootDir>/$1',
    },
  };