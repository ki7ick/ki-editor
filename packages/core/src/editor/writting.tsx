import React, { useContext, useEffect } from 'react';
import { EditorContext } from '../context';

export default function Writting() {
  const { engine } = useContext(EditorContext);

  useEffect(() => {}, []);

  console.log('render');

  return (
    <div>
      <textarea
        value={engine.value}
        onChange={e => {
          engine.onChange(e.target.value);
        }}
      ></textarea>
    </div>
  );
}
