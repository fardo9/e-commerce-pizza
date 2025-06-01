import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import { FlatCompat } from '@eslint/eslintrc'

import nextPlugin from '@next/eslint-plugin-next'
import importPlugin from 'eslint-plugin-import'
import sortPlugin from 'eslint-plugin-simple-import-sort'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
})

export default defineConfig([
  globalIgnores([
    '**/node_modules/**',
    '**/.next/**',
    '**/dist/**',
    '**/build/**',
    '**/coverage/**',
    '**/public/**',
    '**/*.config.{js,cjs,mjs,ts}',
    '**/*.d.ts'
  ]),

  ...compat.extends('next/core-web-vitals', 'next', 'next/typescript'),

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      import: importPlugin,
      'simple-import-sort': sortPlugin,
      '@next/next': nextPlugin
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json'
        }
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': ['warn'],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      'import/order': 'off',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^react', '^next', '^@?\\w'],
            ['^@shared', '^@components', '^@features', '^@entities', '^@widgets'],
            ['^.+\\.s?css$'],
            ['^\\.']
          ]
        }
      ],

      'simple-import-sort/exports': 'warn',
      'import/no-unresolved': 'error',
      'import/no-extraneous-dependencies': 'off',
      'react/react-in-jsx-scope': 'off',
      '@next/next/no-img-element': 'warn',
      '@next/next/no-html-link-for-pages': 'warn',
      '@next/next/no-sync-scripts': 'warn'
    }
  }
])
