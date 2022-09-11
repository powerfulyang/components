import { motion } from 'framer-motion';
import type { FC } from 'react';
import React, { useMemo } from 'react';
import classNames from 'classnames';

export interface MaskProps {}

export const Overlay: FC<MaskProps> = () => {
  const variants = useMemo(
    () => ({
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
      exit: {
        opacity: 0,
      },
    }),
    [],
  );

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.3,
      }}
      className={classNames('absolute inset-0 bg-black/[0.45]')}
    />
  );
};
