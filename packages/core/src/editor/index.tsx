import React, { useState, useEffect } from 'react';
import type { EditorProps } from '../types/editor';
import styles from './index.module.css';

const Editor = ({ value = '', onChange, config = {} }: EditorProps) => {
  const [content, setContent] = useState(value);

  useEffect(() => {
    setContent(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setContent(newValue);
    onChange?.(newValue);
  };

  const editorStyle = {
    width: config.width ?? '100%',
    height: config.height ?? 300,
  };

  return (
    <div 
      className={`${styles.editor} ${config.theme === 'dark' ? styles.dark : ''}`}
      style={editorStyle}
    >
      {config.toolbar && (
        <div className={styles.toolbar}>{/* 工具栏将在后续实现 */}</div>
      )}
      <textarea
        value={content}
        onChange={handleChange}
        className={styles.textarea}
        placeholder={config.placeholder}
      />
    </div>
  );
};

export default Editor;
