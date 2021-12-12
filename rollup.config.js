import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import { isProdProcess } from '@powerfulyang/utils';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';

const pkgDeps = Array.from(Object.keys(pkg.dependencies));
const peerPkgDeps = Array.from(Object.keys(pkg.peerDependencies));

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      minimize: isProdProcess,
    }),
    url(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
  external: [...pkgDeps, ...peerPkgDeps],
};
