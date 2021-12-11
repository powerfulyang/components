import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { TooltipExample } from './TooltipExample';

export default {
  title: 'Example/TooltipExample',
  component: TooltipExample,
} as ComponentMeta<typeof TooltipExample>;

const Template: ComponentStory<typeof TooltipExample> = (args) => <TooltipExample {...args} />;

export const Tooltip = Template.bind({});
Tooltip.args = {
  title: 'Tooltip',
  children: <span>Content</span>,
};
