const { pathsToModuleNameMapper } = require('@powerfulyang/lint');
const tsconfig = require('./tsconfig.json');

const moduleNameMapper = pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
  prefix: '<rootDir>/',
});

const esModules = [].join('|');

/** @type {import('jest').Config} */
module.exports = {
  moduleNameMapper: {
    ...moduleNameMapper,
    // Handle CSS imports
    '^.+\\.(css|sass|scss)$': require.resolve('./__mocks__/styleMock.js'),
    // Handle image imports
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$': require.resolve(`./__mocks__/fileMock.js`),
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
  transform: {
    '.*\\.(tsx?|jsx?)$': '@swc/jest',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [`node_modules/.pnpm/(?!${esModules})`],
};
