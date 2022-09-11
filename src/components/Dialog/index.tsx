import type { FC, PropsWithChildren, ReactElement } from 'react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { usePortal } from '@powerfulyang/hooks';
import { Overlay } from '@/components/Dialog/Overlay';
import { DialogContext } from '@/components/Dialog/DialogContext';
import type { MotionProps } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import { fromEvent } from 'rxjs';
import classNames from 'classnames';

export type DialogProps = {
  visible?: boolean;
  afterClose?: VoidFunction;
  overlayClosable?: boolean;
  onClose?: VoidFunction;
  overlayElement?: ReactElement;
  className?: string;
  mode?: 'modal' | 'drawer';
};

export const Dialog: FC<PropsWithChildren<DialogProps>> = ({
  children,
  visible = false,
  afterClose,
  overlayClosable = true,
  onClose,
  overlayElement,
  className,
  mode,
}) => {
  const Portal = usePortal();
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const subscription = fromEvent<MouseEvent>(document, 'click').subscribe((e) => {
      if (visible) {
        setStartPosition({ x: e.clientX, y: e.clientY });
        subscription.unsubscribe();
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [visible]);

  const context = useMemo(() => ({ visible }), [visible]);

  const handleAfterClose = useCallback(() => {
    setStartPosition({ x: 0, y: 0 });
    afterClose && afterClose();
  }, [afterClose]);

  const handleOverlayClick = useCallback(() => {
    overlayClosable && onClose && onClose();
  }, [overlayClosable, onClose]);

  const documentProps = useMemo((): MotionProps => {
    if (mode === 'modal') {
      return {
        style: {
          transformOrigin: `${startPosition.x}px ${startPosition.y}px`,
        },
        initial: {
          opacity: 0,
          scale: 0,
        },
        animate: {
          opacity: 1,
          scale: 1,
        },
        exit: {
          opacity: 0,
          scale: 0.35,
          transition: {
            type: 'keyframes',
            ease: 'easeInOut',
          },
        },
      };
    }
    return {};
  }, [mode, startPosition]);

  return (
    <Portal>
      <DialogContext.Provider value={context}>
        <AnimatePresence custom={{ startPosition }} onExitComplete={handleAfterClose}>
          {visible && (
            <>
              {overlayElement || <Overlay />}
              <motion.div role="dialog" className="fixed inset-0" onClick={handleOverlayClick}>
                <motion.div {...documentProps} role="document" className={classNames(className)}>
                  <motion.div
                    className="contents"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </DialogContext.Provider>
    </Portal>
  );
};
