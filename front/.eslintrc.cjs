module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      },
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  plugins: ['react'],
  rules: {
    '@typescript-eslint/prefer-ts-expect-error': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-base-to-string': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-confusing-void-expression': 0,
    '@typescript-eslint/no-invalid-void-type': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/consistent-type-imports': 0,
    '@typescript-eslint/no-unsafe-argument': 0,
    'multiline-ternary': 0,
    'spaced-comment': 0,
    'no-unused-vars': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'consistent-return': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/button-has-type': 0,
    'react/no-unstable-nested-components': [2, { allowAsProps: true }],
    'react/no-array-index-key': 0,
    'class-methods-use-this': 0,
    'no-param-reassign': 0,

    'import/order': 0,
    //TODO: what the fuck is going on?
    'simple-import-sort/exports': 0,
    'simple-import-sort/imports': [
      0,
      {
        groups: [
          // External packages.
          ['^'],
          // Internal packages.
          ['^@'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$']
        ]
      }
    ]
  }
}
