export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // 如果你需要浏览器环境
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': 'identity-obj-proxy',
  },
};
