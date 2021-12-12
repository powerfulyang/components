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
        <div key={_} className="py-skeleton__row" />
      ))}
    </div>
  );
};

Skeleton.displayName = 'Skeleton';
