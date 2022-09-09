import type { FC, PropsWithChildren } from 'react';
import React, { useEffect, useRef } from 'react';
import { useIsomorphicLayoutEffect, usePortal } from '@powerfulyang/hooks';
import { delay, fromEvent } from 'rxjs';
import { AnimatePresence, motion } from 'framer-motion';
import './index.scss';

export type TooltipProps = {
  title: string;
};

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({ title, children }) => {
  const Portal = usePortal();
  const ref = useRef<HTMLSpanElement>(null);
  const [show, setShow] = React.useState(false);
  const [{ x, y }, setPosition] = React.useState({ x: 0, y: 0 });

  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      const { top, left, right } = ref.current.getBoundingClientRect();
      const centerX = (left + right) / 2;
      setPosition({ x: centerX, y: top });
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      const enter$ = fromEvent(ref.current, 'mouseenter')
        .pipe(delay(100))
        .subscribe(() => {
          setShow(true);
        });
      const leave$ = fromEvent(ref.current, 'mouseleave')
        .pipe(delay(100))
        .subscribe(() => {
          setShow(false);
        });
      return () => {
        enter$.unsubscribe();
        leave$.unsubscribe();
      };
    }
    return () => {};
  }, []);

  return (
    <>
      <span className="inline-block" ref={ref}>
        {children}
      </span>
      <AnimatePresence>
        {show && (
          <Portal>
            <motion.div
              style={{
                x: `calc(${x}px - 50%)`,
                y: `calc(${y}px - 100% - 10px)`,
              }}
              className="py-tooltip"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              {title}
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};
