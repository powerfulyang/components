import type { FC, PropsWithChildren, ReactNode } from 'react';
import React, { useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useImmer } from '@powerfulyang/hooks';
import './index.scss';
import type { ReturnTypedFunction } from '@powerfulyang/utils';
import { isFunction } from '@powerfulyang/utils';
import { AnimatePresence, motion } from 'framer-motion';
import type { Subscription } from 'rxjs';
import { timer } from 'rxjs';

export type TooltipProps = {
  title: ReactNode | ReturnTypedFunction<ReactNode>;
};

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({ children, title }) => {
  const [visible, setVisible] = useImmer(false);
  const ref = useRef<Subscription>();
  const hoverWrap = useCallback(() => {
    ref.current = timer(150).subscribe(() => {
      setVisible(true);
    });
  }, [setVisible]);

  const leaveWrap = useCallback(() => {
    ref.current = timer(150).subscribe(() => {
      setVisible(false);
    });
  }, [setVisible]);

  useEffect(() => {
    return () => {
      ref.current?.unsubscribe();
    };
  }, []);

  return (
    <span className="relative" onMouseEnter={hoverWrap} onMouseLeave={leaveWrap}>
      {children}
      <AnimatePresence>
        {visible && (
          <motion.div
            variants={{
              hidden: { opacity: 0, transition: { type: false } },
              visible: {
                opacity: 1,
                transition: {
                  ease: 'easeIn',
                  duration: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={classNames('py-tooltip-wrap')}
          >
            <div className="tooltip">
              <div className="title">{isFunction(title) ? title() : title}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

Tooltip.displayName = 'Tooltip';
