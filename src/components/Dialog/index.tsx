import type { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';
import { Portal } from '@/components/Portal';
import { DialogOverlay } from '@/components/Dialog/DialogOverlay';
import type { MotionProps, Variants } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import { css } from '@emotion/react';
import { isNumber } from '@powerfulyang/utils';

type DialogProps = {
  open?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  top?: number | string;
  left?: number | string;
  /**
   * 点击遮罩层是否关闭
   */
  closeOnOverlayClick?: boolean;
} & MotionProps;

const variants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.35,
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
      duration: 0.15,
    },
  },
};

export const Dialog: FC<PropsWithChildren<DialogProps>> = ({
  children,
  open = false,
  onClose,
  onOpen,
  top,
  left,
  closeOnOverlayClick = true,
  ...props
}) => {
  const topOffset = useMemo(() => {
    if (isNumber(top)) {
      return `${top}px`;
    }
    return top ?? '50%';
  }, [top]);

  const leftOffset = useMemo(() => {
    if (isNumber(left)) {
      return `${left}px`;
    }
    return left ?? '50%';
  }, [left]);

  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <>
            <DialogOverlay
              key="overlay"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  if (closeOnOverlayClick) {
                    onClose?.();
                  }
                }
              }}
            />
            <motion.div
              key="dialog"
              role="alertdialog"
              css={css`
                position: fixed;
                top: ${topOffset};
                left: ${leftOffset};
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
              style={{
                y: top === undefined ? '-50%' : 0,
                x: left === undefined ? '-50%' : 0,
              }}
              {...props}
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
};
