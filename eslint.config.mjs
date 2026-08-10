import { globalIgnores } from 'eslint/config'

// Minimal config without Miaoda presets (EdgeOne/CI must not need private packages)
export default [
  globalIgnores(['dist', 'source_package', '**/components/ui/**']),
  {
    files: ['src/**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {},
  },
]
