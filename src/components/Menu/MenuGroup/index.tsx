import type { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';
import classNames from 'classnames';

export type MenuGroupProps = {
  title: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const MenuGroup: FC<PropsWithChildren<MenuGroupProps>> = ({
  title,
  className,
  children,
}) => {
  return (
    <ul>
      <div className={classNames('mb-2 text-lg', className)}>{title}</div>
      {children}
    </ul>
  );
};
