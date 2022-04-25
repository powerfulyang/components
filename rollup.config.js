import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import { isProdProcess } from '@powerfulyang/utils';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const pkgDeps = Object.keys(pkg.dependencies);

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
    resolve(),
    postcss({
      minimize: isProdProcess,
      extract: 'index.css',
    }),
    url(),
    typescript(),
    commonjs(),
  ],
  external: [...pkgDeps],
};
