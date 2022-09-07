const { pathsToModuleNameMapper } = require('@powerfulyang/lint');
const tsconfig = require('./tsconfig.json');

const moduleNameMapper = pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
  prefix: '<rootDir>/',
});

/** @type {import('@jest/types').Config.InitialOptions} */
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
    '^.+\\.(ts|tsx)$': '@swc/jest',
    '.js$': '@swc/jest',
  },
  transformIgnorePatterns: [`/node_modules/.pnpm/(?!lodash-es)`],
  testEnvironment: 'jsdom',
};
