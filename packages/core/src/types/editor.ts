export interface EditorConfig {
  /** 编辑器主题 */
  theme?: 'light' | 'dark';
  /** 是否显示工具栏 */
  toolbar?: boolean;
  /** 编辑器高度 */
  height?: number | string;
  /** 编辑器宽度 */
  width?: number | string;
  /** 占位符文本 */
  placeholder?: string;
  /** 是否启用预览 */
  preview?: boolean;
  /** 是否启用自动保存 */
  autoSave?: boolean;
  /** 自动保存间隔（毫秒） */
  autoSaveInterval?: number;
}

export interface EditorProps {
  /** 编辑器内容 */
  value?: string;
  /** 内容变化回调 */
  onChange?: (value: string) => void;
  /** 编辑器配置 */
  config?: EditorConfig;
  /** 编辑器类名 */
  className?: string;
  /** 编辑器样式 */
  style?: React.CSSProperties;
}
