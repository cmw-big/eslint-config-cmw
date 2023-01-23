'use strict';
const allCoverRules = require('./rules/all-cover');
module.exports = {
  parser: '@typescript-eslint/parser', // 定义ESLint的解析器,使之能识别ts
  extends: [
    // eslint自带的默认的推荐格式
    'eslint:recommended',
    // 使用@typescript-eslint/eslint-plugin的推荐规则
    'plugin:@typescript-eslint/recommended',
    // airbnb的格式
    'airbnb',
    // 使用react-hooks插件推荐的样式
    'plugin:react-hooks/recommended',
    // 这会将prettier错误作为ESLint错误来展示。确保这个配置放到数组的最后。才能使用
    'plugin:prettier/recommended',
  ],
  rules: allCoverRules,
  //   解析选项
  parserOptions: {
    // 代码类型，module。默认是script。
    sourceType: 'module',
    // es的版本，不然可能会不认识相应的全局变量或者类型
    ecmaVersion: 2022,
    // 想使用的额外的语言特性
    ecmaFeatures: {
      // 是否允许在全局作用域下使用return
      globalReturn: false,
      // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
      impliedStrict: true,
      // 允许解析JSX
      jsx: true,
    },
  },
  //   想要启用的环境：这样的话使用一些对应环境的变量就不会报错
  env: {
    browser: true,
    node: true,
  },
//   该字段定义的数据可以在所有的插件中共享。这样每条规则执行的时候都可以访问这里面定义的数据
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      // use a glob pattern
      typescript: {
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        // 尝试解析类型从types里面，即使源码中没有类型
        alwaysTryTypes: true
      }
    }
  },
};
