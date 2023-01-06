import React from 'react';
import { Button, Tooltip } from '@/components';

export const TooltipComponents = () => {
  return (
    <div className="text-white">
      <Tooltip title="nisnda">
        <Button appearance="primary">Tooltip</Button>
      </Tooltip>
    </div>
  );
};
