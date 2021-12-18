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
      <Notification message={'success'} description={'content'} type={'success'} />
      <Notification message={'warn'} description={'content'} type={'warn'} />
      <Notification
        message={'error'}
        description={'contentadjskaldmsal/dmsaldmasl/dmaskd ams. fsaddfm. sdmf. asdfm,'}
        type={'error'}
      />
      <button
        type={'button'}
        onClick={() =>
          notification.warn({
            message: '小心55开!',
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
