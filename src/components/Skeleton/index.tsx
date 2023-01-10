import { motion } from 'framer-motion';
import type { FC } from 'react';
import React from 'react';
import './index.scss';
import classNames from 'classnames';

type SkeletonProps = {
  rows?: number;
  className?: string;
};

export const Skeleton: FC<SkeletonProps> = ({ rows = 4, className }) => {
  return (
    <div className={classNames('py-skeleton', className)}>
      {Object.keys(Array.from({ length: rows })).map((_) => (
        <motion.div
          animate={{
            scaleX: [0.9, 1, 0.9],
            transformOrigin: [0, 0],
            transition: {
              duration: 1.5,
              ease: 'easeInOut',
              repeatType: 'loop',
              repeat: Infinity,
            },
          }}
          key={_}
          className="py-skeleton__row"
        />
      ))}
    </div>
  );
};

Skeleton.displayName = 'Skeleton';
