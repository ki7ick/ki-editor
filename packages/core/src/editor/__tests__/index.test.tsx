import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // 用于扩展 Jest 的 DOM 匹配器
import Editor from '../index'; // 替换为你的 Editor 组件路径

// Mock CSS 模块（如果需要）
jest.mock('./index.module.css', () => ({
  editor: '',
  dark: '',
  toolbar: '',
  textarea: '',
}));

describe('Editor Component', () => {
  it('should render correctly with default props', () => {
    render(<Editor />);
    const editorElement = screen.getByTestId('editor'); // 确保你的组件中有一个 data-testid="editor"
    expect(editorElement).toBeInTheDocument();
  });

  it('should render with custom value and placeholder', () => {
    const customValue = 'Hello, World!';
    const customPlaceholder = 'Type something...';
    render(<Editor value={customValue} config={{ placeholder: customPlaceholder }} />);
    const textareaElement = screen.getByRole('textbox');
    expect(textareaElement).toHaveValue(customValue);
    expect(textareaElement).toHaveAttribute('placeholder', customPlaceholder);
  });

  it('should handle value changes correctly', () => {
    const handleChange = jest.fn();
    render(<Editor onChange={handleChange} />);
    const textareaElement = screen.getByRole('textbox');
    fireEvent.change(textareaElement, { target: { value: 'New Text' } });
    expect(handleChange).toHaveBeenCalledWith('New Text');
  });

  it('should apply dark theme when specified', () => {
    render(<Editor config={{ theme: 'dark' }} />);
    const editorElement = screen.getByTestId('editor');
    expect(editorElement).toHaveClass('dark'); // 假设 dark 类名是通过 styles.dark 添加的
  });

  it('should render toolbar when specified', () => {
    render(<Editor config={{ toolbar: true }} />);
    const toolbarElement = screen.getByTestId('toolbar'); // 确保你的工具栏有一个 data-testid="toolbar"
    expect(toolbarElement).toBeInTheDocument();
  });
});
