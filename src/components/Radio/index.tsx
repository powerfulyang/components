import type { FC, PropsWithChildren } from 'react';
import React, { forwardRef, useId } from 'react';
import './index.scss';

export type RadioProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Radio: FC<PropsWithChildren<RadioProps>> = forwardRef<HTMLInputElement, RadioProps>(
  ({ id, children, ...props }, ref) => {
    const elementId = useId();
    const inputId = id || elementId;
    return (
      <label htmlFor={inputId} className="relative cursor-pointer">
        <input {...props} ref={ref} id={inputId} type="radio" className="py-radio" />
        <span className="py-radio__marker">
          <span className="py-radio-dot" />
        </span>
        <span className="ml-4 mr-3">{children}</span>
      </label>
    );
  },
);

Radio.displayName = 'Radio';
