import type { FC, PropsWithChildren } from 'react';
import React, { useId, useMemo, useState } from 'react';
import classNames from 'classnames';
import { useLatest } from '@powerfulyang/hooks';
import { TabsContext } from './Context';

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
  const uniqueId = useId();
  const handleTabChange = useLatest(onTabChange);

  const memo = useMemo(() => {
    return {
      activeTabKey: activeTabKey || activeTab,
      activeClassName,
      setActiveTabKey: setActiveTab,
      tabClassName,
      uniqueId,
      handleTabChange,
    };
  }, [activeTabKey, activeTab, activeClassName, tabClassName, uniqueId, handleTabChange]);

  return (
    <TabsContext.Provider value={memo}>
      <div {...props} className={classNames(className)} role="menu">
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export { Tab } from './Tab';
