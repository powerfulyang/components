import type { FC } from 'react';
import React from 'react';
import type { TooltipProps } from '@';
import { Tooltip } from '@';

export const TooltipExample: FC<TooltipProps> = ({ children, ...props }) => (
  <div className={'mt-4'}>
    <Tooltip {...props}>{children}</Tooltip>
  </div>
);
