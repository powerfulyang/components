import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';
import type { FC } from 'react';

export type DialogOverlayProps = HTMLMotionProps<'div'>;

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const DialogOverlay: FC<DialogOverlayProps> = (props) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.3,
      }}
      css={css`
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.45);
      `}
      aria-hidden
      {...props}
    />
  );
};
