/* eslint-disable react/button-has-type */
import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';
import './index.scss';
import { motion } from 'framer-motion';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, type, className, onClick, ...props }, ref) => {
    const [position, setPosition] = useState({ left: 0, top: 0 });
    const [rippling, setRippling] = useState(false);
    return (
      <button
        {...props}
        ref={ref}
        type={type || 'button'}
        className={classNames(
          className,
          'rounded bg-purple-500 text-white px-2 py-1 relative text-sm',
        )}
        onClick={(e) => {
          onClick && onClick(e);
          setRippling(true);
          const { clientX, clientY } = e;
          const { left, top } = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
          setPosition({ left: clientX - left, top: clientY - top });
        }}
      >
        {children}
        {rippling && (
          <div className="py-ripple-click">
            <motion.div
              className="py-ripple"
              style={{
                ...position,
                x: '-50%',
                y: '-50%',
              }}
              initial={{
                scale: 0,
                opacity: 1,
              }}
              animate={{
                scale: 2.5,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              onAnimationComplete={() => {
                setRippling(false);
              }}
            />
          </div>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
