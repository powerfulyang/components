import React from 'react';
import { Button, Icon } from '@/components';

export const ButtonComponents = () => {
  return (
    <div className="space-x-2 space-y-2">
      <Button>Default Button</Button>
      <Button appearance="primary">Primary Button</Button>
      <Button appearance="secondary">Secondary Button</Button>
      <Button appearance="danger">Danger Button</Button>
      <Button appearance="ghost">Ghost Button</Button>
      <br />
      <Button disabled>Disabled Button</Button>
      <Button rounded appearance="primary">
        Rounded Button
      </Button>
      <Button appearance="primary" icon={<Icon type="icon-send" />}>
        Icon Button
      </Button>
      <Button loading appearance="primary">
        Loading Button
      </Button>
    </div>
  );
};
