import { useState } from 'react';
import Editor from 'ki-editor';

function App() {
  const [value, setValue] = useState(
    '# Hello KI Editor!\n\n这是一个简单而强大的 Markdown 编辑器。'
  );
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
      <div style={{ marginBottom: 16 }}>
        <label>
          <input type="checkbox" checked={isDark} onChange={e => setIsDark(e.target.checked)} />{' '}
          暗色主题
        </label>
      </div>

      <Editor
        value={value}
        onChange={setValue}
        config={{
          theme: isDark ? 'dark' : 'light',
          toolbar: true,
          placeholder: '请输入内容...',
          height: 400,
        }}
      />

      <div style={{ marginTop: 20 }}>
        <h3>编辑器内容：</h3>
        <pre
          style={{
            padding: 16,
            background: isDark ? '#1e1e1e' : '#f5f5f5',
            color: isDark ? '#fff' : '#000',
            borderRadius: 4,
          }}
        >
          {value}
        </pre>
      </div>
    </div>
  );
}

export default App;
