import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: 'esm',
  // splitting: false,
  sourcemap: false,
  clean: true,
});
