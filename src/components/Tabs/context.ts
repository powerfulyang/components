import { createContext } from 'react';
import type { TabsProps } from '@/components/Tabs/index';

export interface TabsContextProps extends TabsProps {
  uniqueId: string;
}

export const TabsContext = createContext<TabsContextProps>({
  uniqueId: '',
});
