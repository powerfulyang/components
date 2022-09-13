import type { FC, PropsWithChildren } from 'react';
import React, { useContext } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { TabsContext } from '@/components/Tabs/Context';

export type TabProps = {
  tabKey: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Tab: FC<PropsWithChildren<TabProps>> = ({ tabKey, children, className, ...props }) => {
  const {
    activeClassName,
    activeTabKey,
    setActiveTabKey,
    tabClassName,
    uniqueId,
    handleTabChange,
  } = useContext(TabsContext);
  return (
    <div
      {...props}
      className={classNames(
        className,
        'relative flex h-full items-center',
        {
          [activeClassName]: activeTabKey === tabKey,
        },
        tabClassName,
      )}
      onClick={(e) => {
        props?.onClick?.(e);
        setActiveTabKey?.(tabKey);
        handleTabChange?.current?.(tabKey);
      }}
      onKeyDown={(e) => {
        if (e.key === ' ') {
          setActiveTabKey?.(tabKey);
          handleTabChange?.current?.(tabKey);
        }
      }}
      role="menuitem"
      tabIndex={0}
    >
      {children}
      {tabKey === activeTabKey && (
        <motion.div
          layoutId={`${uniqueId}-tab`}
          className="absolute bottom-0 left-0 h-[2px] w-full bg-white"
        />
      )}
    </div>
  );
};
