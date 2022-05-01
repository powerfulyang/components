const { pathsToModuleNameMapper } = require('@powerfulyang/lint');
const tsconfig = require('./tsconfig.json');

const moduleNameMapper = pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
  prefix: '<rootDir>/',
});
module.exports = {
  moduleNameMapper: {
    ...moduleNameMapper,
    // Handle CSS imports
    '^.+\\.(css|sass|scss)$': require.resolve('./__mocks__/styleMock.js'),
    // Handle image imports
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$': require.resolve(`./__mocks__/fileMock.js`),
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/*.spec.(ts|tsx)'],
  testPathIgnorePatterns: ['./node_modules/', './dist/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
};
