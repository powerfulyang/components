import React from 'react';
import { Switch } from '@/components/Switch';

export const SwitchComponents = () => {
  return (
    <div className="space-x-4 text-white">
      <Switch defaultChecked checkedDescription="开启" uncheckedDescription="禁用" />
      <Switch uncheckedDescription="禁用" checkedDescription="开启" />
    </div>
  );
};
