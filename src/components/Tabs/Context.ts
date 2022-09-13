import type { RefObject } from 'react';
import { createContext } from 'react';
import type { TabsProps } from '@/components';

export const TabsContext = createContext<{
  activeTabKey?: string;
  activeClassName: string;
  setActiveTabKey?: (key: string) => void;
  tabClassName: string;
  uniqueId: string;
  handleTabChange?: RefObject<TabsProps['onTabChange']>;
}>({
  activeClassName: '',
  tabClassName: '',
  uniqueId: '',
});
