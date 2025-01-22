module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 文档修改
        'style', // 代码格式修改，注意不是 css 修改
        'refactor', // 代码重构
        'test', // 测试用例修改
        'chore', // 其他修改, 比如构建流程, 依赖管理
        'perf', // 性能优化
        'revert', // 回滚到上一个版本
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
};
