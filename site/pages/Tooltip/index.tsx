import { Tooltip } from '@/components/Tooltip';
import React from 'react';
import { Button } from '@/components';

export const TooltipComponents = () => {
  return (
    <div className="text-white">
      <Tooltip title="nisnda">
        <Button appearance="primary">Tooltip</Button>
      </Tooltip>
    </div>
  );
};
