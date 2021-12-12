import React, { Fragment } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { assets } from '@';

export default {
  title: 'Example/Components/Assets',
  component: Fragment,
} as ComponentMeta<typeof Fragment>;

const Template: ComponentStory<typeof Fragment> = () => {
  return (
    <>
      <img alt={'brokenImg'} src={assets.brokenImg} />
    </>
  );
};

export const AssetsExample = Template.bind({});
AssetsExample.args = {};
