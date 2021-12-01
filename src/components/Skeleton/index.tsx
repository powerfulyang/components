import type { FC } from 'react';
import React from 'react';
import './index.scss';

type SkeletonProps = {
  rows?: number;
};

export const Skeleton: FC<SkeletonProps> = ({ rows = 4 }) => (
  <div className="skeleton">
    {new Array(rows).fill(1).map((_, index) => (
      <div key={index.toString()} />
    ))}
  </div>
);
