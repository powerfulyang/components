import url from '@rollup/plugin-url';
import typescript from '@rollup/plugin-typescript';
import { readFileSync } from 'node:fs';

const str = readFileSync('package.json', 'utf8');
const pkg = JSON.parse(str);
const pkgDeps = Object.keys({
  ...pkg.optionalDependencies,
  ...pkg.peerDependencies,
  ...pkg.dependencies,
});

export default {
  input: 'src/index.tsx',
  output: [
    {
      entryFileNames: `[name].cjs`,
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      preserveModules: true,
    },
    {
      sourcemap: true,
      entryFileNames: '[name].mjs',
      format: 'es',
      exports: 'named',
      preserveModules: true,
      dir: 'dist/es',
    },
  ],
  plugins: [
    url(),
    typescript({
      tsconfig: 'tsconfig.build.json',
    }),
  ],
  external: [...pkgDeps, 'react-dom/client', '@emotion/react/jsx-runtime'],
};
