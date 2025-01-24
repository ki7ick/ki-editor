import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import usePrefix from '../hooks/usePrefix';

export type ToolTipProps = {
  title: string;
};

export const Tooltip = (props: React.PropsWithChildren<ToolTipProps>) => {
  const { title, children } = props;

  const [prefix] = usePrefix('tooltip');

  const ref = useRef<HTMLElement>(null);

  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<{ left: number; bottom: number }>({
    left: 0,
    bottom: 0,
  });

  useEffect(() => {
    if (ref.current && open) {
      const { bottom, top, left, right, width, height } = ref.current.getBoundingClientRect();
      setPosition({
        left: left + width / 2,
        bottom: window.innerHeight - top,
      });
      console.log(window.innerHeight);
      console.log(window.innerWidth);
    }
  }, [open]);

  const getChildren = () => {
    if (React.isValidElement(children)) {
      if (children.type === React.Fragment) {
        return React.createElement('span', {
          ...children.props,
          onMouseEnter: () => {
            setOpen(true);
          },
          onMouseLeave: () => {
            // setOpen(false);
          },
          ref,
        });
      }
      return React.cloneElement(children, {
        ...children.props,
        onMouseEnter: () => {
          setOpen(true);
        },
        onMouseLeave: () => {
          // setOpen(false);
        },
        ref,
      });
    }
    return children;
  };

  return (
    <>
      {getChildren()}
      {open &&
        createPortal(
          <div>
            <div
              style={{
                position: 'absolute',
                ...position,
                transform: 'translateX(-50%)',
              }}
              className={prefix}
            >
              {title}
            </div>
            <div />
          </div>,
          document.body
        )}
    </>
  );
};
