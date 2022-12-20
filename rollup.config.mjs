import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import { isProdProcess } from '@powerfulyang/utils';
import typescript from '@rollup/plugin-typescript';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const pkgDeps = Object.keys({ ...pkg.dependencies, ...pkg.peerDependencies });

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
    postcss({
      minimize: isProdProcess,
      extract: 'index.css',
    }),
    url(),
    typescript({
      tsconfig: 'tsconfig.build.json',
    }),
  ],
  external: [...pkgDeps, 'react-dom/client'],
};
