/* eslint-disable react/button-has-type */
import type { MouseEvent } from 'react';
import React, { forwardRef, useCallback } from 'react';
import classNames from 'classnames';
import './index.scss';
import RippleEffect from '@/components/RippleEffect';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  ripple?: boolean;
  shouldStopPropagation?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      type = 'button',
      className,
      onClick,
      shouldStopPropagation,
      ripple = true,
      disabled,
      ...props
    },
    ref,
  ) => {
    const handleClick = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        if (!disabled && onClick) {
          onClick(e);
        }
        if (shouldStopPropagation) e.stopPropagation();
      },
      [disabled, onClick, shouldStopPropagation],
    );
    return (
      <button
        {...props}
        ref={ref}
        type={type}
        className={classNames(
          className,
          'rounded bg-purple-500 text-white px-3 py-1.5 text-base relative text-sm overflow-hidden',
        )}
        onClick={handleClick}
      >
        {children}
        {ripple && !disabled && <RippleEffect />}
      </button>
    );
  },
);

Button.displayName = 'Button';
