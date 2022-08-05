import type { FC, PropsWithChildren } from 'react';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { usePortal } from '@powerfulyang/hooks';
import { Overlay } from '@/components/Dialog/Overlay';
import { DialogContext } from '@/components/Dialog/DialogContext';
import { AnimatePresence, motion } from 'framer-motion';

export type DialogProps = {
  visible?: boolean;
  afterClose?: VoidFunction;
};

export const Dialog: FC<PropsWithChildren<DialogProps>> = ({
  children,
  visible = false,
  afterClose,
}) => {
  const dialogNode = useRef(document.createElement('section'));
  const Portal = usePortal(dialogNode.current);

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
    afterClose && afterClose();
  }, [afterClose]);

  return (
    <Portal>
      <DialogContext.Provider value={context}>
        <AnimatePresence onExitComplete={handleAfterClose}>
          {visible && (
            <>
              <Overlay />
              <motion.div className="fixed inset-0 flex justify-center items-center overflow-auto">
                <div className="h-[110vh] bg-white">
                  <h1>Dialog</h1>
                  <h1>Dialog</h1>
                  <h1>Dialog</h1>
                  {children}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </DialogContext.Provider>
    </Portal>
  );
};
