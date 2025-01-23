import React from 'react';
import { EditorEngine } from '../engine';

export default function useEngine() {
  const engineRef = React.useRef(new EditorEngine());

  return engineRef.current;
}
