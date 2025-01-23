import React from 'react';
import usePrefix from '../hooks/usePrefix';

export default function Viewer() {
  const [prefix] = usePrefix('viewer');

  return <div className={prefix}>1</div>;
}
