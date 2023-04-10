import { motion } from 'framer-motion';
import { css } from '@emotion/react';

export type DialogOverlayProps = {};

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

export const DialogOverlay = (props: DialogOverlayProps) => {
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
