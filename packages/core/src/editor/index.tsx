import React from 'react';
import Wrapper from './wrapper';
import ToolBar from './toolbar';
import Writting from './writting';
import Viewer from './viewer';
import useEngine from '../hooks/useEngine';
import { EditorContext } from '../context';
import type { EditorProps } from '../types/editor.type';
import type { EditorContextValue } from '../context';

export default function Editor({ value, onChange }: EditorProps) {
  const engine = useEngine();

  const contextValue: EditorContextValue = {
    engine,
    outerProps: {
      value,
      onChange,
    },
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <Wrapper>
        <ToolBar />
        <Wrapper.Content>
          <Writting />
          <Viewer />
        </Wrapper.Content>
      </Wrapper>
    </EditorContext.Provider>
  );
}
