# KI Editor

一个简单而强大的React Markdown编辑器。

## 开发

本项目使用pnpm作为包管理工具，采用monorepo结构。

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 构建

```bash
pnpm build
```

## 项目结构

- `packages/core`: 编辑器核心组件
- `packages/demo`: 示例应用

## 使用方法

```tsx
import { Editor } from '@ki-editor/core';

function App() {
  return <Editor value="初始内容" onChange={value => console.log(value)} />;
}
```
