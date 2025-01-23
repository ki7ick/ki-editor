import React, { useState, useEffect } from 'react';
import type { EditorProps } from '../types/editor';

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
  console.log(1);

  const editorStyle = {
    width: config.width ?? '100%',
    height: config.height ?? 300,
  };

  return (
    <div className={`editor`} style={editorStyle}>
      {config.toolbar && <div>tool</div>}
      <textarea value={content} onChange={handleChange} placeholder={config.placeholder} />
    </div>
  );
};

export default Editor;
