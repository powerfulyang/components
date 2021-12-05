import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import { isProdProcess } from '@powerfulyang/utils';
import tailwindcss from 'tailwindcss';
import pkg from './package.json';

const pkgDeps = Array.from(Object.keys(pkg.dependencies));

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      plugins: [tailwindcss('./tailwind.config.js')],
      minimize: isProdProcess,
      extract: 'index.css',
    }),
    url(),
    svgr(),
    resolve(),
    commonjs({ include: 'node_modules/**' }),
    typescript(),
    babel(),
    isProdProcess && terser(),
  ],
  external: [...pkgDeps, 'react', 'react-dom'],
};
