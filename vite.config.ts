// vite.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        '**/vite.config.ts',
        '**/next.config.ts',
        '**/postcss.config.mjs',
        '**/eslint.config.mjs',
        '**/tailwind.config.ts',
        '**/types/**',
        '**/constants/**',
        '**/config/**',
        '**/dto/**',
        '**/*.d.ts',
        '**/*.skeleton.tsx',
        '**/.next/**'
      ]
    }
  }
})
