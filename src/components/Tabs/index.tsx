import type { FC, PropsWithChildren } from 'react';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useLatest } from '@powerfulyang/hooks';

export const TabsContext = createContext<{
  activeTabKey?: string;
  activeClassName: string;
  setActiveTabKey?: (key: string) => void;
  tabClassName: string;
}>({
  activeClassName: '',
  tabClassName: '',
});

export type TabsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  activeTabKey?: string;
  activeClassName?: string;
  tabClassName?: string;
  onTabChange?: (key: string) => void;
  defaultActiveTabKey?: string;
};

export const Tabs: FC<PropsWithChildren<TabsProps>> = ({
  children,
  className,
  activeTabKey,
  activeClassName = '',
  tabClassName = '',
  onTabChange,
  defaultActiveTabKey,
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTabKey);

  const memo = useMemo(() => {
    return {
      activeTabKey: activeTabKey || activeTab,
      activeClassName,
      setActiveTabKey: setActiveTab,
      tabClassName,
    };
  }, [activeClassName, activeTabKey, activeTab, setActiveTab, tabClassName]);

  const handleTabChange = useLatest(onTabChange);

  useEffect(() => {
    if (activeTab) {
      handleTabChange.current?.(activeTab);
    }
  }, [activeTab, handleTabChange]);

  return (
    <TabsContext.Provider value={memo}>
      <div {...props} className={classNames(className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export type TabProps = {
  tabKey: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Tab: FC<PropsWithChildren<TabProps>> = ({ tabKey, children, className, ...props }) => {
  const { activeClassName, activeTabKey, setActiveTabKey, tabClassName } = useContext(TabsContext);
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
      }}
      role="presentation"
    >
      {children}
      {tabKey === activeTabKey && (
        <motion.div layoutId="tab" className="absolute bottom-0 h-[2px] w-full bg-white" />
      )}
    </div>
  );
};
