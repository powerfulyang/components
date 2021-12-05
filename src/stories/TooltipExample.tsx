import type { FC } from 'react';
import React from 'react';
import type { TooltipProps } from '../../dist/es';
import { Tooltip } from '../../dist/es';
import '../../dist/es/index.css';

export const TooltipExample: FC<TooltipProps> = ({ children, ...props }) => (
  <div style={{ marginTop: '4rem' }}>
    <Tooltip {...props}>{children}</Tooltip>
  </div>
);
