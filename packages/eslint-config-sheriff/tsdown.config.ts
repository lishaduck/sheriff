import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: 'esm',
  target: 'node20.10',
  // spliting: false,
  sourcemap: false,
  clean: true,
  // @ts-expect-error - WIP!!!
  noExternal: ['@sherifforg/constants', '@sherifforg/types'],
  // skipNodeModulesBundle: true, ^^
  dts: { transformer: 'oxc' },
  bundleDts: true,
  // unused: { level: 'error' },
});
