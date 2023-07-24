module.exports = {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    '^[(react/(.*)$)|^(react$)]',
    '^@[a-zA-Z]/(.*)$',
    '^blocks$',
    '^ui$',
    '^t$',
    '^[./]',
  ],
  importOrderCaseInsensitive: true,
  importOrderSortSpecifiers: true,
  importOrderSeparation: true,
  tailwindFunctions: ['cva'],
  bracketSameLine: true,
  bracketSpacing: true,
  arrowParens: 'always',
  trailingComma: 'all',
  parser: 'typescript',
  singleQuote: true,
  printWidth: 100,
  endOfLine: 'lf',
  tabWidth: 2,
  semi: false,
}