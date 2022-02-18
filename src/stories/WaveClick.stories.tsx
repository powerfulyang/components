import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { WaveClick } from '@/components/WaveClick';

export default {
  title: 'Example/Components/WaveClick',
  component: WaveClick,
} as ComponentMeta<typeof WaveClick>;

const Template: ComponentStory<typeof WaveClick> = (args) => {
  return <WaveClick {...args} />;
};

export const WaveClickExample = Template.bind({});
WaveClickExample.args = {
  title: 'WaveClick',
  children: (
    <div className={'bg-pink-300 w-20 h-10 flex items-center justify-center'}>
      <span>ni好</span>
    </div>
  ),
};
