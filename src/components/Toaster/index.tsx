import { useEffect, useRef } from 'react';
import { Subject } from 'rxjs';
import { Portal } from '@/components/Portal';
import { css } from '@emotion/react';
import type { Variants } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import type { ValueOrFunction } from '@powerfulyang/utils';
import { resolveValue, uniqueId } from '@powerfulyang/utils';
import { atomWithImmer, useImmerAtom } from 'jotai-immer';

type ToasterProps = {
  _id: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  message: ValueOrFunction<string, ToasterProps>;
  _visible?: boolean;
};

const ToasterAtom = atomWithImmer<ToasterProps[]>([]);

const sub = new Subject<ToasterProps>();

export const toast = {
  success: (message: ValueOrFunction<string, ToasterProps>) => {
    sub.next({
      _id: uniqueId(),
      message,
      type: 'success',
      _visible: true,
    });
  },
};

const variants: Variants = {
  initial: {
    y: '-200%',
    scale: 0.6,
    opacity: 0.5,
    zIndex: 'auto',
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: 'keyframes',
      ease: [0.21, 1.02, 0.73, 1],
    },
    zIndex: 'auto',
  },
  exit: {
    scale: 0.6,
    opacity: 0,
    y: '-150%',
    zIndex: -1,
    transition: {
      duration: 0.4,
      type: 'keyframes',
      ease: [0.06, 0.71, 0.55, 1],
    },
  },
};

export const Toaster = () => {
  const [toasters, setToasters] = useImmerAtom(ToasterAtom);

  useEffect(() => {
    const sub$ = sub.subscribe({
      next: (toaster) => {
        setToasters((draft) => {
          draft.push(toaster);
        });
      },
    });
    return () => {
      sub$.unsubscribe();
    };
  }, [setToasters]);

  const timerRef = useRef(new Map<string, number>());

  const removeToaster = (toaster: ToasterProps) => {
    const _timer = window.setTimeout(() => {
      setToasters((draft) => {
        const _item = draft.find((item) => item._id === toaster._id);
        if (_item) {
          _item._visible = false;
        }
      });
    }, 2000);
    timerRef.current.set(toaster._id, _timer);
  };

  return (
    <Portal>
      <div
        css={css`
          position: fixed;
          inset: 0;
          z-index: 999;
          padding: 1rem;
          pointer-events: none;
          gap: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        {toasters.map((toaster) => (
          <AnimatePresence key={toaster._id}>
            {toaster._visible === true && (
              <motion.div
                css={css`
                  background: #fff;
                  padding: 8px 10px;
                  border-radius: 8px;
                  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
                  color: #363636;
                  pointer-events: auto;
                `}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                onHoverStart={() => {
                  const _timer = timerRef.current.get(toaster._id);
                  if (_timer !== undefined) {
                    window.clearTimeout(_timer);
                  }
                }}
                onHoverEnd={() => {
                  removeToaster(toaster);
                }}
                onAnimationComplete={(label) => {
                  if (label === 'animate') {
                    removeToaster(toaster);
                  }
                  if (label === 'exit' && toaster._visible === false) {
                    setToasters((draft) => {
                      const _index = draft.findIndex((item) => item._id === toaster._id);
                      if (_index !== -1) {
                        draft.splice(_index, 1);
                      }
                    });
                  }
                }}
              >
                {resolveValue(toaster.message, toaster)}
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </Portal>
  );
};
