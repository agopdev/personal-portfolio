module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': ['error', {
      singleQuote: true,
      semi: true,
      useTabs: true,
      tabWidth: 4,
      trailingComma: 'all',
      bracketSpacing: true,
      jsxBracketSameLine: false,
      arrowParens: 'always',
      printWidth: 80,
    }],
    '@typescript-eslint/indent': ['error', 'tab'],
    '@typescript-eslint/semi': ['error', 'always'],
    'indent': ['error', 'tab'],
    'semi': ['error', 'always'],
  },
};
