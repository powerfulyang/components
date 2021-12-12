import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from '@';

export default {
  title: 'Example/Components/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => {
  return <Skeleton {...args} />;
};

export const SkeletonExample = Template.bind({});
SkeletonExample.args = {
  rows: 4,
};
