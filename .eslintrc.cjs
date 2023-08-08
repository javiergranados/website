module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    // make sure it's always the last config
    'eslint-config-prettier',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts', '.vue'],
      },
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
