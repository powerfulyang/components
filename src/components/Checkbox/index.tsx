import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import React, { useId } from 'react';
import './index.scss';

export type CheckboxProps = HTMLAttributes<HTMLInputElement>;

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({
  id,
  className,
  children,
  ...props
}) => {
  const elementId = useId();
  return (
    <>
      <input {...props} className="hidden" type="checkbox" id={id || elementId} />
      <label htmlFor={id || elementId} className="flex cursor-pointer items-center">
        <span className="py-checkbox" />
        <span className="ml-2">{children}</span>
      </label>
    </>
  );
};
