import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tooltip } from '@';

export default {
  title: 'Example/Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => {
  return (
    <div className={'mt-4'}>
      <Tooltip {...args} />
    </div>
  );
};

export const TooltipExample = Template.bind({});
TooltipExample.args = {
  title: 'Tooltip',
  children: 'Content',
};
