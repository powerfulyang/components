/* eslint-disable react/button-has-type */
import type { MouseEvent, ReactElement } from 'react';
import React, { cloneElement, forwardRef, useCallback } from 'react';
import classNames from 'classnames';
import './index.scss';
import RippleEffect from '@/components/RippleEffect';
import { Icon } from '@/components/Icon';

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  ripple?: boolean;
  shouldStopPropagation?: boolean;
  appearance?: 'primary' | 'secondary' | 'danger' | 'default' | 'ghost';
  rounded?: boolean;
  icon?: ReactElement;
  loading?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = 'button',
      className,
      onClick,
      shouldStopPropagation,
      ripple = true,
      disabled,
      appearance = 'default',
      rounded = false,
      icon,
      loading = false,
      ...props
    },
    ref,
  ) => {
    const canClick = !disabled && !loading;

    const handleClick = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        if (canClick && onClick) {
          onClick(e);
        }
        if (shouldStopPropagation) e.stopPropagation();
      },
      [canClick, onClick, shouldStopPropagation],
    );
    return (
      <button
        {...props}
        ref={ref}
        type={type}
        className={classNames(
          className,
          'relative overflow-hidden py-1.5',
          'text-base text-base text-white',
          {
            'cursor-not-allowed bg-gray-400 opacity-50': disabled,
          },
          {
            'bg-purple-500': appearance === 'primary',
          },
          {
            'bg-gray-500': appearance === 'secondary',
          },
          {
            'bg-red-500': appearance === 'danger',
          },
          {
            'border-[1px] border-solid border-purple-500': appearance === 'ghost',
          },
          {
            'rounded-full px-4': rounded,
            'rounded px-3': !rounded,
          },
          {
            'cursor-default': loading,
          },
          'inline-flex items-center justify-center',
        )}
        onClick={handleClick}
      >
        {icon &&
          !loading &&
          cloneElement(icon, {
            className: classNames('mr-1.5', icon.props.className),
          })}
        {loading && (
          <Icon type="icon-loading" className={classNames('mr-1.5 animate-spin text-lg')} />
        )}
        {children}
        {ripple && canClick && <RippleEffect />}
      </button>
    );
  },
);

Button.displayName = 'Button';
