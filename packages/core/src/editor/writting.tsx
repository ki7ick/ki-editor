import React, { useContext, useSyncExternalStore } from 'react';
import { EditorContext } from '../context';
import usePrefix from '../hooks/usePrefix';

export default function Writting() {
  const { engine, outerProps } = useContext(EditorContext);
  const [prefix] = usePrefix('writting');

  const value = useSyncExternalStore(
    engine.subscribe.bind(engine),
    () => engine.value,
    () => engine.value
  );

  const finalValue = outerProps.value ?? value;

  const finalOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    engine.onChange(e.target.value);
    outerProps.onChange?.(e.target.value);
  };
  return (
    <div className={prefix}>
      <textarea className={prefix + '-textarea'} value={finalValue} onChange={finalOnChange} />
    </div>
  );
}
