import type { FC, PropsWithChildren } from 'react';
import React, { forwardRef, useId } from 'react';
import './index.scss';
import classNames from 'classnames';
import { useIsomorphicLayoutEffect } from '@powerfulyang/hooks';
import { Icon } from '../Icon';

export type CheckboxProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  indeterminate?: boolean;
};

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(({ id, className, children, indeterminate, ...props }, ref) => {
  const elementId = useId();

  const inputId = id || elementId;

  useIsomorphicLayoutEffect(() => {
    if (indeterminate !== undefined) {
      (document.getElementById(inputId) as HTMLInputElement).indeterminate = indeterminate;
    }
  }, [indeterminate, inputId]);

  return (
    <label htmlFor={inputId} className="relative cursor-pointer">
      <input
        {...props}
        ref={ref}
        type="checkbox"
        id={inputId}
        className={classNames('py-checkbox', className)}
      />
      <span className="py-checkbox__marker">
        <Icon className="py-checkbox__checked" type="icon-checked" />
        <Icon className="py-checkbox__indeterminate" type="icon-indeterminate" />
      </span>
      <span className="ml-4 mr-3">{children}</span>
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
