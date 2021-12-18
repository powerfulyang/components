import { motion } from 'framer-motion';
import type { FC } from 'react';
import React from 'react';
import './index.scss';

type SkeletonProps = {
  rows?: number;
};

export const Skeleton: FC<SkeletonProps> = ({ rows = 4 }) => {
  return (
    <div className="py-skeleton">
      {Object.keys(Array.from({ length: rows })).map((_) => (
        <motion.div
          animate={{
            scaleX: [0.9, 1, 0.9],
            transformOrigin: ['right', 'left'],
            transition: {
              duration: 1.5,
              ease: 'easeInOut',
              loop: Infinity,
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
