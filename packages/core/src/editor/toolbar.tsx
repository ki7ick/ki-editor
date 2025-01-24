import React from 'react';
import usePrefix from '../hooks/usePrefix';
import { LeftExpand, RightExpand } from '../icons';
import { Tooltip } from '../components';

export default function ToolBar() {
  const [prefix] = usePrefix('toolbar');

  const leftIcons = [
    {
      key: 'leftExpand',
      title: '仅编辑',
      icon: LeftExpand,
    },
    {
      key: 'rightExpand',
      title:
        '仅预览仅预览仅预览仅预览仅预览仅预览仅预览仅预览仅预览仅预览仅预览仅预览仅预览仅预览仅预览仅预览',
      icon: RightExpand,
    },
  ];

  return (
    <div className={prefix} id="toolbar">
      <div className={`${prefix}-left`}>1</div>
      <div className={`${prefix}-right`}>
        {leftIcons.map(({ key, icon, title }) => (
          <Tooltip key={key} title={title}>
            <div style={{ width: 80, border: 'solid 1px teal' }}>
              {icon()}
              <span>1</span>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
