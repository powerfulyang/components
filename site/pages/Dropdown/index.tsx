import { Dropdown } from '@/components/Dropdown';
import type { FC } from 'react';
import React from 'react';
import { Button } from '@/components';
import { Menu } from '@/components/Menu';

const Overlay: FC = () => {
  return (
    <Menu>
      <Menu.Item menuKey="1" title="Components">
        111
      </Menu.Item>
    </Menu>
  );
};

export const DropdownComponents = () => {
  return (
    <div className="inline-block">
      <Dropdown overlay={<Overlay />}>
        <Button appearance="primary">Dropdown</Button>
      </Dropdown>
    </div>
  );
};
