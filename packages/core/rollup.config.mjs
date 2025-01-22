import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'default',
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
        exports: 'default',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      commonjs(),
      postcss({
        modules: true,
        extract: false,
        inject: true,
        minimize: true,
        autoModules: true,
      }),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/__tests__/**'],
        declaration: true,
        declarationDir: 'dist',
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/types/index.ts',
    output: {
      file: 'dist/types.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
];
