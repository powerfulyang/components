import React from 'react';
import { Checkbox } from '@/components/Checkbox';

export const CheckboxComponents = () => {
  return (
    <div className="text-white">
      <Checkbox defaultChecked>Checked</Checkbox>
      <Checkbox indeterminate>Indeterminate</Checkbox>
      <Checkbox>Unchecked</Checkbox>
    </div>
  );
};
