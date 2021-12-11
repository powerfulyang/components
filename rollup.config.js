import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import { isProdProcess } from '@powerfulyang/utils';
import tailwindcss from 'tailwindcss';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';

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
      format: 'esm',
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
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
  external: [...pkgDeps, 'react', 'react-dom'],
};
