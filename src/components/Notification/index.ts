import ReactDOM from 'react-dom';
import React from 'react';
import dynamic from 'next/dynamic';
import type { NotificationProps } from '@/components/Notification/Notification';
import { getNotificationParent } from '@/components/Notification/Notification';

export type RenderNotificationProps = Omit<NotificationProps, 'onClose'>;

export const Notification = dynamic(
  import('./Notification').then((res) => res.Notification),
  {
    ssr: false,
  },
);

const renderNotification = ({ ...props }: RenderNotificationProps) => {
  const parent = getNotificationParent();
  const fragment = document.createDocumentFragment();
  parent.appendChild(fragment);
  const onClose = () => {
    ReactDOM.unmountComponentAtNode(fragment);
  };
  ReactDOM.render(
    React.createElement(Notification, {
      ...props,
      onClose,
    }),
    fragment,
  );
};

export const notification = {
  success({ ...props }: RenderNotificationProps) {
    renderNotification({ autoClose: true, ...props, type: 'success' });
  },
  warn({ ...props }: RenderNotificationProps) {
    renderNotification({ autoClose: true, ...props, type: 'warn' });
  },
  error({ ...props }: RenderNotificationProps) {
    renderNotification({ autoClose: true, ...props, type: 'error' });
  },
};
