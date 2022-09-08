import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

export type TabsProps = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Tabs: FC<PropsWithChildren<TabsProps>> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={classNames(className)}>
      {children}
    </div>
  );
};

export type TabProps = {
  tabKey: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Tab: FC<PropsWithChildren<TabProps>> = ({ tabKey, children, className, ...props }) => {
  return (
    <div {...props} className={classNames(className, 'relative flex h-full items-center')}>
      {children}
      {tabKey === '1' && (
        <motion.div layoutId="tab" className="absolute bottom-0 h-[2px] w-full bg-white" />
      )}
    </div>
  );
};
