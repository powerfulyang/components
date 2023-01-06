import type { FC } from 'react';
import React from 'react';
import { Button, Dropdown, Menu } from '@/components';

const Overlay: FC = () => {
  return (
    <Menu itemClassName="hover:bg-pink-200">
      <div className="divide-y divide-gray-200">
        <div className="p-1">
          <Menu.Item menuKey="1">Option 1</Menu.Item>
          <Menu.Item menuKey="2">Option 2</Menu.Item>
        </div>
        <div className="p-1">
          <Menu.Item menuKey="3">Option 3</Menu.Item>
        </div>
      </div>
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
