import type { FC } from 'react';
import React, { forwardRef, useId } from 'react';
import './index.scss';

export type SwitchProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  checkedDescription?: string;
  uncheckedDescription?: string;
};

export const Switch: FC<SwitchProps> = forwardRef<HTMLInputElement, SwitchProps>(
  ({ id, children, checkedDescription, uncheckedDescription, ...props }, ref) => {
    const elementId = useId();
    const inputId = id || elementId;
    return (
      <label htmlFor={inputId} className="relative inline-block cursor-pointer">
        <input {...props} ref={ref} id={inputId} type="checkbox" className="py-switch" />
        <span
          className="py-switch__marker"
          data-checked-desc={checkedDescription}
          data-unchecked-desc={uncheckedDescription}
        >
          <span className="py-switch-dot" />
        </span>
      </label>
    );
  },
);

Switch.displayName = 'Switch';
