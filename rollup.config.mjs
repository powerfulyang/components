import url from '@rollup/plugin-url';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json' assert { type: 'json' };

const pkgDeps = Object.keys({ ...pkg.optionalDependencies, ...pkg.peerDependencies });

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
