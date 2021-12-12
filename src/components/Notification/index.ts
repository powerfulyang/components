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

const renderNotification = ({ type, title, content }: RenderNotificationProps) => {
  const parent = getNotificationParent();
  const fragment = document.createDocumentFragment();
  parent.appendChild(fragment);
  const onClose = () => {
    ReactDOM.unmountComponentAtNode(fragment);
  };
  ReactDOM.render(
    React.createElement(Notification, {
      type,
      title,
      content,
      onClose,
    }),
    fragment,
  );
};

export const notification = {
  success({ title, content }: RenderNotificationProps) {
    renderNotification({ title, content, type: 'success' });
  },
  warn({ title, content }: RenderNotificationProps) {
    renderNotification({ title, content, type: 'warn' });
  },
  error({ title, content }: RenderNotificationProps) {
    renderNotification({ title, content, type: 'error' });
  },
};
