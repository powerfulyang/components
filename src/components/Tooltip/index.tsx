import type { FC, MouseEvent, PropsWithChildren } from 'react';
import React, { useEffect, useRef } from 'react';
import { usePortal } from '@powerfulyang/hooks';
import { fromEvent, map, merge } from 'rxjs';
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

  useEffect(() => {
    if (ref.current) {
      const rEnter$ = fromEvent<MouseEvent>(ref.current, 'mouseenter');
      const rLeave$ = fromEvent<MouseEvent>(ref.current, 'mouseleave');
      const sub = merge(
        rEnter$.pipe(map(() => true)), //
        rLeave$.pipe(
          map(() => {
            return !!document.querySelector('.py-tooltip:hover');
          }),
        ), //
      ).subscribe((value) => {
        if (value && ref.current) {
          const { top, left, right } = ref.current.getBoundingClientRect();
          const centerX = (left + right) / 2;
          setPosition({ x: centerX, y: top });
        }
        setShow(value);
      });
      return () => {
        sub.unsubscribe();
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
                y: `calc(${y}px - 100% - 8px)`,
              }}
              className="py-tooltip"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.1 }}
              onHoverStart={() => {
                setShow(true);
              }}
              onHoverEnd={() => {
                setShow(false);
              }}
            >
              {title}
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};