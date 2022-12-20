import { motion } from 'framer-motion';
import type { FC } from 'react';
import React, { memo, useCallback, useMemo } from 'react';
import { useImmer } from '@powerfulyang/hooks';
import './index.scss';
import { debounce } from '@powerfulyang/utils';

interface Ripple {
  x: number;
  y: number;
  size: number;
  key: number;
}

const ANIMATION_DURATION_MS = 700;

const RippleEffect: FC = () => {
  const [ripples, setRipples] = useImmer<Ripple[]>([]);

  const cleanUpDebounced = useMemo(() => {
    return debounce(() => {
      setRipples([]);
    }, ANIMATION_DURATION_MS);
  }, [setRipples]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.button !== 0) {
        return;
      }

      const container = e.currentTarget as HTMLDivElement;
      const position = container.getBoundingClientRect() as DOMRect;

      const rippleSize = container.offsetWidth / 2;

      setRipples((draft) => {
        draft.push({
          x: e.clientX - position.x - rippleSize / 2,
          y: e.clientY - position.y - rippleSize / 2,
          size: rippleSize,
          key: draft.length + 1,
        });
      });

      requestAnimationFrame(() => {
        cleanUpDebounced();
      });
    },
    [setRipples, cleanUpDebounced],
  );

  return (
    <div role="none" className="ripple-container" onMouseDown={handleMouseDown}>
      {ripples.map(({ x, y, size, key }) => (
        <motion.span key={key} style={{ width: size, height: size, left: x, top: y }} />
      ))}
    </div>
  );
};

export default memo(RippleEffect);
