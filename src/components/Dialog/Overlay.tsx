import { motion } from 'framer-motion';
import type { FC } from 'react';
import React, { useContext, useMemo } from 'react';
import classNames from 'classnames';
import { DialogContext } from '@/components/Dialog/DialogContext';

export interface MaskProps {}

export const Overlay: FC<MaskProps> = () => {
  const { visible } = useContext(DialogContext);
  const animate = useMemo(() => {
    if (visible) {
      return {
        opacity: 1,
      };
    }
    return {
      opacity: 0,
    };
  }, [visible]);
  return (
    <motion.div animate={animate} className={classNames('absolute inset-0 bg-black/[0.65]')} />
  );
};
