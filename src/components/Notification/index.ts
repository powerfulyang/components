import ReactDOM from 'react-dom';
import React from 'react';
import type { NotificationProps } from './Notification';
import { getNotificationParent, Notification } from './Notification';

export type RenderNotificationProps = Omit<NotificationProps, 'onClose'>;

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
