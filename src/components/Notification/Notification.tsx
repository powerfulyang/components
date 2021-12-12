import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { timer } from 'rxjs';
import { usePortal } from '@powerfulyang/hooks';
import './index.scss';
import { Icon } from '@/components/Icon';

export type NotificationProps = {
  title?: string;
  content?: string;
  type?: 'success' | 'warn' | 'error';
  onClose?: VoidFunction;
  autoClose?: boolean;
  delay?: number;
};

export const getNotificationParent = () => {
  let parent = document.querySelector('#py-notification-collection');
  if (!parent) {
    parent = document.createElement('div');
    parent.id = 'py-notification-collection';
    document.body.appendChild(parent);
  }
  return parent;
};

export const Notification: FC<NotificationProps> = ({
  title,
  content,
  type = 'success',
  onClose,
  delay = 1500,
  autoClose = true,
}) => {
  const dialogNode = useRef(document.createElement('section'));
  const { Portal } = usePortal({
    container: dialogNode.current,
  });
  const [visible, setVisible] = React.useState(true);

  useEffect(() => {
    const dialog = dialogNode.current;
    const parent = getNotificationParent();
    parent.appendChild(dialog);
    const subscribe = timer(delay).subscribe(() => {
      autoClose && setVisible(false);
    });
    return () => {
      parent.removeChild(dialog);
      subscribe.unsubscribe();
    };
  }, [autoClose, delay]);

  return (
    <Portal>
      <AnimatePresence
        onExitComplete={() => {
          onClose?.();
        }}
      >
        {visible && (
          <motion.div
            key="notification"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
              exited: { opacity: 0, x: 50 },
            }}
            initial="hidden"
            animate="visible"
            exit="exited"
            transition={{ duration: 0.4 }}
            className="py-notification"
          >
            <div>
              <section className="flex items-center">
                <Icon type={`icon-${type}`} className={classNames('status', type)} />
                <section className="title">{title}</section>
                <div className="ml-auto">
                  <Icon type="icon-close" className="close" onClick={() => setVisible(false)} />
                </div>
              </section>
              <div className="mx-2">
                <section className="content">{content}</section>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
