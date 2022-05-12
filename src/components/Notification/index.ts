import { createRoot } from 'react-dom/client';
import type { NotificationProps } from './Notification';
import { getNotificationParent, Notification } from './Notification';

export type RenderNotificationProps = Omit<NotificationProps, 'onClose'>;

const renderNotification = ({ ...props }: RenderNotificationProps) => {
  const parent = getNotificationParent();
  const fragment = document.createDocumentFragment();
  parent.appendChild(fragment);
  const root = createRoot(fragment);
  const onClose = () => {
    root.unmount();
  };
  root.render(Notification({ ...props, onClose }));
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
