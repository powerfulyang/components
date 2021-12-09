import type { FC } from 'react';
import React from 'react';
import type { TooltipProps } from '../../dist/cjs';
import { Tooltip } from '../../dist/cjs';

export const TooltipExample: FC<TooltipProps> = ({ children, ...props }) => (
  <div style={{ marginTop: '4rem' }}>
    <Tooltip {...props}>{children}</Tooltip>
  </div>
);
