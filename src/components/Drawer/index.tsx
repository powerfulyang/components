import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import type { DialogProps } from '@/components';
import { Dialog } from '@/components';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import classNames from 'classnames';

export type DrawerProps = {
  title?: string;
} & DialogProps;

export const Drawer: FC<PropsWithChildren<DrawerProps>> = ({ children, className, ...props }) => {
  const variants: Variants = {
    initial: {
      x: '100%',
    },
    animate: {
      x: 0,
      transition: {
        type: 'keyframes',
        duration: 0.225,
        ease: 'easeOut',
      },
    },
    exit: {
      x: '100%',
      transition: {
        duration: 0.195,
        type: 'keyframes',
        ease: [0.4, 0, 0.6, 1],
      },
    },
  };
  return (
    <Dialog {...props} className={classNames('flex h-full justify-end', className)} mode="drawer">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="h-full w-[350px] bg-white"
      >
        {children}
      </motion.div>
    </Dialog>
  );
};
