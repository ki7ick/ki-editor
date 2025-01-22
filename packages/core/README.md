# KI Editor

一个简单而强大的 React Markdown 编辑器。

## 安装

```bash
npm install ki-editor
# 或
pnpm add ki-editor
# 或
yarn add ki-editor
```

## 使用

```tsx
import Editor from 'ki-editor';

function App() {
  return <Editor value="初始内容" onChange={value => console.log(value)} />;
}
```

## Props

| 属性     | 类型                    | 默认值 | 描述                 |
| -------- | ----------------------- | ------ | -------------------- |
| value    | string                  | ''     | 编辑器的初始内容     |
| onChange | (value: string) => void | -      | 内容变化时的回调函数 |

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build
```

## License

MIT
