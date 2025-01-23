import React from 'react';
import usePrefix from '../hooks/usePrefix';

export type WrapperProps = {};

function Content({ children }: React.PropsWithChildren) {
  const [prefix] = usePrefix('wrapper-content');

  return <div className={prefix}>{children}</div>;
}

export default function Wrapper({ children }: React.PropsWithChildren<WrapperProps>) {
  const [prefix] = usePrefix('wrapper');

  return <div className={prefix}>{children}</div>;
}

Wrapper.Content = Content;
