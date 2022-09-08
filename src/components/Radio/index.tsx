import type { FC, PropsWithChildren } from 'react';
import React, { useId } from 'react';

export type RadioProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Radio: FC<PropsWithChildren<RadioProps>> = ({ id, children, ...props }) => {
  const elementId = useId();
  const inputId = id || elementId;
  return (
    <label htmlFor={inputId}>
      <input id={inputId} type="radio" {...props} />
      {children}
    </label>
  );
};
