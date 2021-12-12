import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { notification, Notification } from '@';

export default {
  title: 'Example/Components/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = () => {
  return (
    <>
      <Notification title={'success'} content={'content'} type={'success'} autoClose={false} />
      <Notification title={'warn'} content={'content'} type={'warn'} autoClose={false} />
      <Notification
        title={'error'}
        content={'contentadjskaldmsal/dmsaldmasl/dmaskd ams. fsaddfm. sdmf. asdfm,'}
        type={'error'}
        autoClose={false}
      />
      <button
        type={'button'}
        onClick={() =>
          notification.warn({
            title: '小心55开!',
          })
        }
      >
        点击弹出notification
      </button>
    </>
  );
};

export const NotificationExample = Template.bind({});
NotificationExample.args = {};
