import React from 'react';
import { EditorEngine } from './engine';

export type EditorContextValue = {
  engine: EditorEngine;
};

const EditorContext = React.createContext<EditorContextValue>({} as unknown as any);

export { EditorContext };
