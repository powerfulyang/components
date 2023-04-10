import type { FC, PropsWithChildren } from 'react';
import { Portal } from '@/components/Portal';
import { DialogOverlay } from '@/components/Dialog/DialogOverlay';
import type { MotionProps, Variants } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import { css } from '@emotion/react';

type DialogProps = {
  open?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
} & MotionProps;

const variants: Variants = {
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
      duration: 0.2,
    },
  },
};

export const Dialog: FC<PropsWithChildren<DialogProps>> = ({
  children,
  open = false,
  onClose,
  onOpen,
  ...props
}) => {
  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <>
            <DialogOverlay key="overlay" />
            <div
              css={css`
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              `}
            >
              <motion.div
                key="dialog"
                role="alertdialog"
                css={css`
                  border-radius: 6px;
                  background-color: #fff;

                  width: 90vw;
                  max-width: 500px;
                  max-height: 85vh;
                  padding: 25px;
                  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
                `}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                {...props}
              >
                {children}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
};
