import type { FC, PropsWithChildren, ReactElement } from 'react';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { usePortal } from '@powerfulyang/hooks';
import { Overlay } from '@/components/Dialog/Overlay';
import { DialogContext } from '@/components/Dialog/DialogContext';
import { AnimatePresence, motion } from 'framer-motion';
import { fromEvent } from 'rxjs';

export type DialogProps = {
  visible?: boolean;
  afterClose?: VoidFunction;
  overlayClosable?: boolean;
  onClose?: VoidFunction;
  overlayElement?: ReactElement;
};

export const Dialog: FC<PropsWithChildren<DialogProps>> = ({
  children,
  visible = false,
  afterClose,
  overlayClosable = true,
  onClose,
  overlayElement,
}) => {
  const dialogNode = useRef(document.createElement('section'));
  const Portal = usePortal(dialogNode.current);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const subscription = fromEvent<MouseEvent>(document, 'click').subscribe((e) => {
      if (visible) {
        setStartPosition({ x: e.clientX, y: e.clientY });
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [visible]);

  useEffect(() => {
    if (visible) {
      const dialog = dialogNode.current;
      const parent = document.body;
      parent.appendChild(dialog);
    }
  }, [visible]);
  const context = useMemo(() => ({ visible }), [visible]);

  const handleAfterClose = useCallback(() => {
    document.body.removeChild(dialogNode.current);
    setStartPosition({ x: 0, y: 0 });
    afterClose && afterClose();
  }, [afterClose]);

  const handleOverlayClick = useCallback(() => {
    overlayClosable && onClose && onClose();
  }, [overlayClosable, onClose]);

  return (
    <Portal>
      <DialogContext.Provider value={context}>
        <AnimatePresence custom={{ startPosition }} onExitComplete={handleAfterClose}>
          {visible && (
            <>
              {overlayElement || <Overlay />}
              <motion.div className="fixed inset-0" onClick={handleOverlayClick}>
                <motion.div
                  style={{
                    transformOrigin: `${startPosition.x}px ${startPosition.y}px`,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.35,
                  }}
                  transition={{
                    type: 'keyframes',
                    ease: 'easeOut',
                  }}
                  className="pt-32"
                >
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
