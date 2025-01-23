import React from 'react';
import usePrefix from '../hooks/usePrefix';

export default function ToolBar() {
  const [prefix] = usePrefix('toolbar');

  return <div className={prefix}>toolbar</div>;
}
