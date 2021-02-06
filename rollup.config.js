import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import { __prod__ } from '@powerfulyang/utils';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import pkg from './package.json';

const pkgDeps = Array.from(Object.keys(pkg.dependencies));

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
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      plugins: [autoprefixer(), tailwindcss('./tailwind.config.js')],
      minimize: __prod__,
      extract: 'index.css',
    }),
    url(),
    svgr(),
    resolve(),
    commonjs({ include: 'node_modules/**' }),
    typescript(),
    babel(),
    __prod__ && terser(),
  ],
  external: [...pkgDeps, 'react', 'react-dom'],
};
