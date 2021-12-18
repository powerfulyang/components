import type { FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { interval } from 'rxjs';
import { usePortal } from '@powerfulyang/hooks';
import './index.scss';
import { Icon } from '@/components/Icon';

export type NotificationProps = {
  message?: string;
  description?: string;
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
  message,
  description,
  type = 'success',
  onClose,
  delay = 1500,
  autoClose = false,
}) => {
  const dialogNode = useRef(document.createElement('section'));
  const [hovering, setHovering] = useState(false);
  const { Portal } = usePortal({
    container: dialogNode.current,
  });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dialog = dialogNode.current;
    const parent = getNotificationParent();
    parent.appendChild(dialog);

    return () => {
      parent.removeChild(dialog);
    };
  }, [autoClose, delay]);

  useEffect(() => {
    const subscribe = interval(delay).subscribe(() => {
      autoClose && !hovering && setVisible(false);
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, [autoClose, delay, hovering]);

  return (
    <Portal>
      <AnimatePresence
        onExitComplete={() => {
          onClose?.();
        }}
      >
        {visible && (
          <motion.div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            key="notification"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
              exited: { opacity: 0, x: 50 },
            }}
            onHoverEnd={() => {
              autoClose && setVisible(false);
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
                <section className="title">{message}</section>
                <div className="ml-auto">
                  <Icon
                    type="icon-close"
                    className="close pointer"
                    onClick={() => setVisible(false)}
                  />
                </div>
              </section>
              <div className="mx-2">
                <section className="content">{description}</section>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
