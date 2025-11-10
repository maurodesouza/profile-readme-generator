import { defineConfig } from 'vitest/config';
import path from 'path';
import { features } from 'process';

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      'react-twc$': path.resolve(__dirname, './.jest/mocks/react-twc.js'),
      '@': path.resolve(__dirname, './src'),
      config: path.resolve(__dirname, './src/config'),
      types: path.resolve(__dirname, './src/types'),
      utils: path.resolve(__dirname, './src/utils'),
      features: path.resolve(__dirname, './src/features'),
      resources: path.resolve(__dirname, './src/resources'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./.jest/setup.ts'],
    exclude: ['node_modules', '/.next/'],
    include: [
      'src/**/test.ts',
      'src/**/test.tsx',
      'src/**/*.{test,spec}.{ts,tsx}',
    ],
    coverage: {
      enabled: true,
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/pages/**/*.ts(x)?',
        'src/templates/**/*.ts(x)?',
        'src/services/**/*.ts(x)?',
        'src/styles/**/*.ts',
        'src/types/**/*.ts',
        'src/app/**/*.ts(x)?',
        'src/generators/**/*.ts(x)?',
        'src/components/**/*.ts(x)?',
        '**/*.d.ts',
        '**/*.js',
        'node_modules/',
        '/.next/',
      ],
    },
  },
});
