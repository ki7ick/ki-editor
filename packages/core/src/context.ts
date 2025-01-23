import React from 'react';
import type { EditorEngine } from './engine';
import type { EditorProps } from './types/editor.type';

export type EditorContextValue = {
  engine: EditorEngine;
  outerProps: Pick<EditorProps, 'value' | 'onChange'>;
};

const EditorContext = React.createContext<EditorContextValue>(
  null as unknown as EditorContextValue
);

export { EditorContext };
