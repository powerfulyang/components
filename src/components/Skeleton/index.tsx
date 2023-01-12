import { motion } from 'framer-motion';
import type { FC } from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const skeletonLoading = keyframes({
  '0%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0 50%',
  },
});

type SkeletonProps = {
  rows?: number;
  className?: string;
};

const Item = styled(motion.div)`
  background: linear-gradient(
    90deg,
    rgba(190, 190, 190, 0.2) 25%,
    rgba(129, 129, 129, 0.24) 37%,
    rgba(190, 190, 190, 0.2) 63%
  );
  background-size: 400% 100%;
  border-radius: 5px;
  animation: ${skeletonLoading} 1.4s ease infinite;
  width: 1rem;
  height: 1rem;

  &:first-child {
    width: 50%;
  }

  &:last-child {
    width: 75%;
  }
`;

export const Skeleton: FC<SkeletonProps> = ({ rows = 4, className }) => {
  return (
    <div
      className={className}
      css={css({
        width: '100%',
        height: '100%',
      })}
    >
      {Object.keys(Array.from({ length: rows })).map((_) => (
        <Item
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
        />
      ))}
    </div>
  );
};

Skeleton.displayName = 'Skeleton';
