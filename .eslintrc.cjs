module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@rocketseat/eslint-config/react',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },

  

}
