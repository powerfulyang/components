import type { FC, PropsWithChildren } from 'react';
import React, { useMemo } from 'react';
import { Portal } from '@/components/Portal';
import { css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

export interface PopoverProps {
  anchorEl: HTMLElement | null;
  open?: boolean;
  onClose?: () => void;
  anchorOrigin?: {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
}

export const Popover: FC<PropsWithChildren<PopoverProps>> = ({
  children,
  anchorEl,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left',
  },
  onClose,
  open = false,
}) => {
  const style = useMemo(() => {
    const { vertical, horizontal } = anchorOrigin;

    const _style: React.CSSProperties = {
      position: 'absolute',
      pointerEvents: 'auto',
    };
    if (!anchorEl) return _style;

    const anchorRect = anchorEl.getBoundingClientRect();
    const { top, left, height, width } = anchorRect;
    switch (vertical) {
      case 'top':
        _style.top = top;
        break;
      case 'center':
        _style.top = top + height / 2;
        break;
      case 'bottom':
        _style.top = top + height;
        break;
      default:
        break;
    }
    switch (horizontal) {
      case 'left':
        _style.left = left;
        break;
      case 'center':
        _style.left = left + width / 2;
        break;
      case 'right':
        _style.left = left + width;
        break;
      default:
        break;
    }
    return _style;
  }, [anchorEl, anchorOrigin]);

  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <div
            onClick={onClose}
            role="presentation"
            css={css`
              position: fixed;
              inset: 0;
            `}
          >
            <motion.div
              css={css`
                position: absolute;
                transform-origin: top left;
                background-color: white;
                border-radius: 4px;
                box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
                padding: 8px;
              `}
              style={style}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.2,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
