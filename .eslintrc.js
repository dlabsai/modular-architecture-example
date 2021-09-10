module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': 2,
  }
};
